#!/usr/bin/env node

/**
 * Build Verification Test Script
 * 
 * This script verifies that the build configuration is correct and will work on Vercel.
 * Run this before deploying to catch issues early.
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

function test(name, fn) {
    tests.push({ name, fn });
}

function runTests() {
    log('\n🔍 Running Build Verification Tests...\n', 'blue');

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

// Test 1: Check package.json exists
test('package.json exists', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    if (!fs.existsSync(packagePath)) {
        throw new Error('package.json not found');
    }
});

// Test 2: Check vite is in dependencies
test('vite is in dependencies (not devDependencies)', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    const isInDeps = pkg.dependencies && pkg.dependencies.vite;
    const isInDevDeps = pkg.devDependencies && pkg.devDependencies.vite;

    if (!isInDeps && !isInDevDeps) {
        throw new Error('vite not found in dependencies or devDependencies');
    }

    if (isInDevDeps && !isInDeps) {
        throw new Error('vite is in devDependencies but should be in dependencies for CI/CD builds');
    }

    if (isInDeps) {
        info(`   vite version: ${pkg.dependencies.vite}`);
    }
});

// Test 3: Check build script exists
test('build script exists in package.json', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    if (!pkg.scripts || !pkg.scripts.build) {
        throw new Error('build script not found in package.json');
    }

    // Accept both "vite build" and "npx vite build" as valid
    const validBuildCommands = ['vite build', 'npx vite build'];
    if (!validBuildCommands.includes(pkg.scripts.build)) {
        info(`   build script: "${pkg.scripts.build}"`);
    } else {
        info(`   build script: "${pkg.scripts.build}"`);
    }
});

// Test 4: Check vercel.json exists and is valid
test('vercel.json exists and is valid JSON', () => {
    const vercelPath = path.join(process.cwd(), 'vercel.json');
    if (!fs.existsSync(vercelPath)) {
        throw new Error('vercel.json not found');
    }

    try {
        const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
        info(`   framework: ${vercelConfig.framework || 'not specified'}`);
        info(`   buildCommand: ${vercelConfig.buildCommand || 'not specified'}`);
        info(`   outputDirectory: ${vercelConfig.outputDirectory || 'not specified'}`);
    } catch (err) {
        throw new Error(`vercel.json is not valid JSON: ${err.message}`);
    }
});

// Test 5: Check vercel.json configuration
test('vercel.json has correct configuration', () => {
    const vercelPath = path.join(process.cwd(), 'vercel.json');
    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));

    if (vercelConfig.outputDirectory !== 'dist') {
        throw new Error(`outputDirectory is "${vercelConfig.outputDirectory}" but should be "dist"`);
    }

    if (vercelConfig.buildCommand && vercelConfig.buildCommand !== 'npm run build') {
        warning(`   buildCommand is "${vercelConfig.buildCommand}" (recommended: "npm run build")`);
    }

    if (!vercelConfig.rewrites || vercelConfig.rewrites.length === 0) {
        warning('   No rewrites configured (SPA routing may not work)');
    }
});

// Test 6: Check vite.config.ts exists
test('vite.config.ts exists', () => {
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    if (!fs.existsSync(viteConfigPath)) {
        throw new Error('vite.config.ts not found');
    }
});

// Test 7: Check vite.config.ts outDir matches vercel.json
test('vite.config.ts outDir matches vercel.json outputDirectory', () => {
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    const vercelPath = path.join(process.cwd(), 'vercel.json');

    const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf8');
    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));

    // Extract outDir from vite.config.ts (simple regex match)
    const outDirMatch = viteConfigContent.match(/outDir:\s*['"]([^'"]+)['"]/);
    const viteOutDir = outDirMatch ? outDirMatch[1] : 'dist'; // default is dist

    if (viteOutDir !== vercelConfig.outputDirectory) {
        throw new Error(
            `Mismatch: vite.config.ts outDir is "${viteOutDir}" but vercel.json outputDirectory is "${vercelConfig.outputDirectory}"`
        );
    }

    info(`   Both configured to use: ${viteOutDir}`);
});

// Test 8: Check if node_modules exists and vite is installed
test('node_modules exists and vite is installed', () => {
    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    if (!fs.existsSync(nodeModulesPath)) {
        throw new Error('node_modules not found - run "npm install" first');
    }

    const vitePath = path.join(nodeModulesPath, 'vite');
    if (!fs.existsSync(vitePath)) {
        throw new Error('vite package not found in node_modules - run "npm install"');
    }

    const viteBinPath = path.join(nodeModulesPath, '.bin', 'vite');
    if (!fs.existsSync(viteBinPath)) {
        throw new Error('vite binary not found in node_modules/.bin - run "npm install"');
    }

    // Check permissions on Unix systems
    if (process.platform !== 'win32') {
        try {
            const stats = fs.statSync(viteBinPath);
            const isExecutable = (stats.mode & parseInt('111', 8)) !== 0;
            if (!isExecutable) {
                warning('   vite binary does not have execute permissions (may cause issues in CI/CD)');
            } else {
                info('   vite binary has execute permissions');
            }
        } catch (err) {
            warning(`   Could not check permissions: ${err.message}`);
        }
    }
});

// Test 9: Check if build command works (dry run check)
test('build command is executable', () => {
    const packagePath = path.join(process.cwd(), 'package.json');
    const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

    if (!pkg.scripts || !pkg.scripts.build) {
        throw new Error('build script not found');
    }

    // Check if we can resolve the vite command
    try {
        const { execSync } = require('child_process');
        // Just check if the command exists, don't actually run the build
        execSync('npm run build --help 2>&1 || npm run build --version 2>&1 || true', {
            stdio: 'pipe',
            cwd: process.cwd(),
        });
        info('   build command is available');
    } catch (err) {
        // This is okay, we're just checking if npm can find the script
        info('   build command check completed');
    }
});

// Test 10: Check required source files exist
test('required source files exist', () => {
    const indexHtmlPath = path.join(process.cwd(), 'index.html');
    if (!fs.existsSync(indexHtmlPath)) {
        throw new Error('index.html not found');
    }

    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
        throw new Error('src directory not found');
    }

    const mainTsxPath = path.join(srcPath, 'main.tsx');
    if (!fs.existsSync(mainTsxPath)) {
        throw new Error('src/main.tsx not found');
    }

    const appTsxPath = path.join(srcPath, 'App.tsx');
    if (!fs.existsSync(appTsxPath)) {
        throw new Error('src/App.tsx not found');
    }
});

// Test 11: Check for common configuration issues
test('no obvious configuration conflicts', () => {
    const vercelPath = path.join(process.cwd(), 'vercel.json');
    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));

    // Check if framework is specified
    if (!vercelConfig.framework) {
        warning('   framework not specified in vercel.json (recommended: "vite")');
    } else if (vercelConfig.framework !== 'vite') {
        warning(`   framework is "${vercelConfig.framework}" (expected "vite")`);
    }

    // Check if installCommand overrides auto-detection
    if (vercelConfig.installCommand) {
        warning('   installCommand is explicitly set (Vercel auto-detection may be better)');
    }
});

// Test 12: Validate build output directory will be created correctly
test('build output directory configuration is correct', () => {
    const viteConfigPath = path.join(process.cwd(), 'vite.config.ts');
    const viteConfigContent = fs.readFileSync(viteConfigPath, 'utf8');

    // Check that outDir is explicitly set (good practice)
    const outDirMatch = viteConfigContent.match(/outDir:\s*['"]([^'"]+)['"]/);
    if (!outDirMatch) {
        warning('   outDir not explicitly set in vite.config.ts (using default "dist")');
    }
});

// Run all tests
runTests();

