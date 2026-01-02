#!/usr/bin/env node

/**
 * Full Build Verification Test Script
 * 
 * This script performs a complete build and verifies:
 * 1. Build completes successfully
 * 2. Output directory is created
 * 3. Required build artifacts exist
 * 4. Build output is valid
 * 
 * Run this before deploying to catch build issues early.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function error(message) {
  log(`❌ ${message}`, 'red');
}

function success(message) {
  log(`✅ ${message}`, 'green');
}

function info(message) {
  log(`ℹ️  ${message}`, 'cyan');
}

function warning(message) {
  log(`⚠️  ${message}`, 'yellow');
}

const tests = [];
let passed = 0;
let failed = 0;
let buildOutputDir = null;

function test(name, fn) {
  tests.push({ name, fn });
}

function runTests() {
  log('\n🔍 Running Full Build Verification Tests...\n', 'blue');
  
  tests.forEach(({ name, fn }) => {
    try {
      log(`Testing: ${name}`, 'cyan');
      fn();
      success(`${name}`);
      passed++;
    } catch (err) {
      error(`${name}`);
      error(`   ${err.message}`);
      failed++;
    }
    console.log('');
  });

  log('\n' + '='.repeat(50), 'blue');
  log(`Results: ${passed} passed, ${failed} failed`, failed > 0 ? 'red' : 'green');
  log('='.repeat(50) + '\n', 'blue');

  if (failed > 0) {
    process.exit(1);
  }
}

// Determine build output directory from config
function getBuildOutputDir() {
  try {
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf8');
    const outDirMatch = viteConfigContent.match(/outDir:\s*['"]([^'"]+)['"]/);
    return outDirMatch ? outDirMatch[1] : 'dist';
  } catch (err) {
    return 'dist'; // default
  }
}

buildOutputDir = getBuildOutputDir();

// Test 1: Clean previous build
test('clean previous build directory', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  if (fs.existsSync(distPath)) {
    info(`   Removing existing ${buildOutputDir} directory...`);
    fs.rmSync(distPath, { recursive: true, force: true });
    success(`   Cleaned ${buildOutputDir} directory`);
  } else {
    info(`   No existing ${buildOutputDir} directory to clean`);
  }
});

// Test 2: Run the build command
test('build completes successfully', () => {
  try {
    info('   Running: npm run build');
    execSync('npm run build', {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: { ...process.env, NODE_ENV: 'production' },
    });
    success('   Build completed without errors');
  } catch (err) {
    throw new Error(`Build failed: ${err.message}`);
  }
});

// Test 3: Check output directory exists
test('build output directory exists', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  if (!fs.existsSync(distPath)) {
    throw new Error(`${buildOutputDir} directory was not created`);
  }
  
  if (!fs.statSync(distPath).isDirectory()) {
    throw new Error(`${buildOutputDir} exists but is not a directory`);
  }
  
  info(`   Output directory: ${distPath}`);
});

// Test 4: Check index.html exists
test('index.html exists in build output', () => {
  const indexPath = path.join(process.cwd(), buildOutputDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error('index.html not found in build output');
  }
  
  const stats = fs.statSync(indexPath);
  if (stats.size === 0) {
    throw new Error('index.html exists but is empty');
  }
  
  info(`   index.html size: ${(stats.size / 1024).toFixed(2)} KB`);
});

// Test 5: Check index.html content
test('index.html has valid content', () => {
  const indexPath = path.join(process.cwd(), buildOutputDir, 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');
  
  if (!content.includes('<html') && !content.includes('<!DOCTYPE')) {
    throw new Error('index.html does not appear to be valid HTML');
  }
  
  // Check for common React app indicators
  const hasRoot = content.includes('root') || content.includes('app');
  if (!hasRoot) {
    warning('   index.html may be missing root element');
  }
  
  // Check for script tags (Vite bundles JS)
  if (!content.includes('<script')) {
    warning('   index.html does not contain script tags (JS may not be bundled)');
  }
});

// Test 6: Check for asset files
test('build output contains asset files', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  const files = fs.readdirSync(distPath, { withFileTypes: true });
  
  const jsFiles = files.filter(f => f.isFile() && f.name.endsWith('.js'));
  const cssFiles = files.filter(f => f.isFile() && f.name.endsWith('.css'));
  
  if (jsFiles.length === 0) {
    throw new Error('No JavaScript files found in build output');
  }
  
  info(`   JavaScript files: ${jsFiles.length}`);
  if (cssFiles.length > 0) {
    info(`   CSS files: ${cssFiles.length}`);
  }
  
  // Check file sizes are reasonable
  jsFiles.forEach(file => {
    const filePath = path.join(distPath, file.name);
    const stats = fs.statSync(filePath);
    const sizeKB = stats.size / 1024;
    
    if (sizeKB > 5000) {
      warning(`   Large JS file: ${file.name} (${sizeKB.toFixed(2)} KB)`);
    }
  });
});

// Test 7: Check for asset directory (images, etc.)
test('asset files are included in build', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  const files = fs.readdirSync(distPath, { withFileTypes: true });
  
  // Check for assets directory or image files
  const hasAssetsDir = files.some(f => f.isDirectory() && (f.name === 'assets' || f.name.startsWith('assets')));
  const hasImages = files.some(f => 
    f.isFile() && /\.(png|jpg|jpeg|svg|gif|webp)$/i.test(f.name)
  );
  
  // This is just informational - assets might be inlined or in subdirectories
  if (hasAssetsDir) {
    info('   Assets directory found');
    const assetsPath = path.join(distPath, files.find(f => f.isDirectory() && f.name.includes('assets')).name);
    const assetFiles = fs.readdirSync(assetsPath);
    info(`   Asset files: ${assetFiles.length}`);
  } else if (hasImages) {
    info('   Image files found in root');
  } else {
    info('   No separate assets directory (may be inlined or bundled)');
  }
});

// Test 8: Verify build output structure
test('build output has expected structure', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  const files = fs.readdirSync(distPath, { withFileTypes: true });
  
  const hasIndexHtml = files.some(f => f.isFile() && f.name === 'index.html');
  const hasJsFiles = files.some(f => f.isFile() && f.name.endsWith('.js'));
  
  if (!hasIndexHtml) {
    throw new Error('index.html missing from build output');
  }
  
  if (!hasJsFiles) {
    throw new Error('No JavaScript bundle files found');
  }
  
  info('   Build structure looks valid');
});

// Test 9: Check build output matches vercel.json configuration
test('build output matches vercel.json configuration', () => {
  const vercelPath = path.join(process.cwd(), 'vercel.json');
  if (!fs.existsSync(vercelPath)) {
    warning('   vercel.json not found (skipping configuration check)');
    return;
  }
  
  const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  
  if (vercelConfig.outputDirectory !== buildOutputDir) {
    throw new Error(
      `Mismatch: Build created "${buildOutputDir}" but vercel.json expects "${vercelConfig.outputDirectory}"`
    );
  }
  
  info(`   Output directory matches vercel.json: ${buildOutputDir}`);
});

// Test 10: Check for common build issues
test('no obvious build issues detected', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  const indexPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    throw new Error('Cannot check for issues - index.html missing');
  }
  
  const content = fs.readFileSync(indexPath, 'utf8');
  
  // Check for source map references (usually fine, but can be large)
  if (content.includes('.map')) {
    info('   Source maps detected in build (consider excluding in production)');
  }
  
  // Check for development indicators
  if (content.includes('localhost') || content.includes('127.0.0.1')) {
    warning('   Build may contain development URLs');
  }
  
  info('   Build quality checks passed');
});

// Test 11: Calculate build size
test('build output size is reasonable', () => {
  const distPath = path.join(process.cwd(), buildOutputDir);
  
  function getDirectorySize(dirPath) {
    let totalSize = 0;
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file.name);
      if (file.isDirectory()) {
        totalSize += getDirectorySize(filePath);
      } else {
        totalSize += fs.statSync(filePath).size;
      }
    });
    
    return totalSize;
  }
  
  const totalSize = getDirectorySize(distPath);
  const sizeMB = totalSize / (1024 * 1024);
  
  info(`   Total build size: ${sizeMB.toFixed(2)} MB`);
  
  if (sizeMB > 50) {
    warning('   Build size is quite large (>50MB) - consider optimizing');
  } else if (sizeMB > 10) {
    info('   Build size is moderate - acceptable for most projects');
  } else {
    info('   Build size is good');
  }
});

// Run all tests
runTests();

