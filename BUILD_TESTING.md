# Build Testing Guide

This document explains the build testing strategy for this project and how to use the test scripts to catch deployment issues early.

## Overview

We've implemented comprehensive build verification tests to ensure your project will deploy successfully to Vercel. These tests catch common configuration issues before they cause deployment failures.

## Test Scripts

### 1. Configuration Tests (`npm run test:build`)

**Fast, non-invasive checks** that validate your configuration without building.

**What gets tested:**
- ✅ Package configuration (`package.json`)
- ✅ Vite location (must be in `dependencies` for CI/CD)
- ✅ Build script existence
- ✅ Vercel configuration (`vercel.json`)
- ✅ Vite configuration (`vite.config.ts`)
- ✅ Configuration consistency (output directories match)
- ✅ Dependency installation
- ✅ Binary permissions
- ✅ Source file presence

**Use this when:**
- Making configuration changes
- Before committing
- Quick validation
- In pre-commit hooks

**Time:** ~1-2 seconds

---

### 2. Full Build Tests (`npm run test:build:full`)

**Complete build verification** that actually builds your project and validates the output.

**What gets tested:**
- ✅ Build completes successfully
- ✅ Output directory is created correctly
- ✅ `index.html` exists and is valid
- ✅ JavaScript bundles are generated
- ✅ Assets are included
- ✅ Build structure is correct
- ✅ Output matches configuration
- ✅ Build size is reasonable

**Use this when:**
- Before deploying to production
- After major code changes
- Troubleshooting build issues
- In CI/CD pipelines

**Time:** ~10-30 seconds (depends on build time)

---

### 3. Combined Verification (`npm run verify`)

Runs configuration tests followed by a full build.

**Use this when:**
- Final check before deploying
- Want both quick and full validation

---

## Common Issues These Tests Catch

### ✅ Issue: Vite in devDependencies
**Error:** `vite is in devDependencies but should be in dependencies`
**Fix:** Move `vite` to `dependencies` in `package.json`

### ✅ Issue: Output Directory Mismatch
**Error:** `Mismatch: vite.config.ts outDir is "build" but vercel.json outputDirectory is "dist"`
**Fix:** Make both use the same directory (recommended: `dist`)

### ✅ Issue: Missing Build Script
**Error:** `build script not found in package.json`
**Fix:** Add `"build": "vite build"` to `package.json` scripts

### ✅ Issue: Invalid Vercel Config
**Error:** `vercel.json is not valid JSON`
**Fix:** Fix JSON syntax errors in `vercel.json`

### ✅ Issue: Build Fails
**Error:** `Build failed: [error message]`
**Fix:** Fix the compilation/build error shown in the output

### ✅ Issue: Missing Output Files
**Error:** `index.html not found in build output`
**Fix:** Ensure build completes successfully and source files are correct

---

## Integration Examples

### GitHub Actions

```yaml
name: Build Verification

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Test build configuration
        run: npm run test:build
      
      - name: Full build verification
        run: npm run test:build:full
```

### Pre-commit Hook (using husky)

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run test:build"
    }
  }
}
```

### Vercel Build Command

You can also run tests as part of the Vercel build:

```json
// vercel.json
{
  "buildCommand": "npm run test:build && npm run build"
}
```

---

## Understanding Test Output

### Color Coding
- 🟢 **Green (✅)**: Test passed
- 🟡 **Yellow (⚠️)**: Warning (non-critical)
- 🔴 **Red (❌)**: Test failed (needs fixing)
- 🔵 **Cyan (ℹ️)**: Informational message

### Exit Codes
- `0`: All tests passed
- `1`: One or more tests failed

This makes the scripts suitable for CI/CD pipelines where exit codes matter.

---

## Troubleshooting Failed Tests

1. **Read the error message** - It usually tells you exactly what's wrong
2. **Check the test name** - Each test has a descriptive name indicating what it's checking
3. **Verify your files** - Make sure `package.json`, `vercel.json`, and `vite.config.ts` are correct
4. **Run locally first** - Fix issues before pushing to CI/CD
5. **Check file permissions** - On Unix systems, ensure proper permissions

---

## Best Practices

1. **Run `test:build` frequently** - Quick validation during development
2. **Run `test:build:full` before deploying** - Ensures build actually works
3. **Fix warnings** - They may not break builds but indicate potential issues
4. **Keep tests in CI/CD** - Automated verification catches issues early
5. **Update tests as needed** - Add custom checks for project-specific requirements

---

## Customizing Tests

The test scripts are in `scripts/` directory. You can modify them to add project-specific checks:

```javascript
// In scripts/test-build.js or test-build-full.js

test('My custom check', () => {
  // Your custom validation logic
  if (somethingIsWrong) {
    throw new Error('Description of the issue');
  }
});
```

---

## What These Tests Don't Cover

These tests focus on **build configuration and output validation**. They don't test:

- ❌ Application functionality
- ❌ Runtime behavior
- ❌ Unit/integration tests
- ❌ End-to-end tests
- ❌ Accessibility
- ❌ Performance (beyond size checks)

For those, use appropriate testing frameworks (Jest, Vitest, Playwright, etc.).

---

## Summary

These build verification tests are your first line of defense against deployment failures. They catch configuration issues early, saving time and preventing broken deployments.

**Quick Reference:**
- `npm run test:build` - Quick config check
- `npm run test:build:full` - Full build verification
- `npm run verify` - Both checks
- All tests should pass before deploying! ✅

