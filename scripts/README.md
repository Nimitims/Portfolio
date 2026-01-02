# Build Verification Test Scripts

This directory contains test scripts to verify your build configuration and catch issues before deploying to Vercel.

## Available Test Scripts

### 1. `test-build.js` - Configuration Verification

Quick checks to verify your build configuration without running a full build.

**What it checks:**
- ✅ `package.json` exists and is valid
- ✅ `vite` is in `dependencies` (not `devDependencies`)
- ✅ Build script exists in `package.json`
- ✅ `vercel.json` exists and is valid JSON
- ✅ `vercel.json` configuration matches expectations
- ✅ `vite.config.ts` exists
- ✅ `vite.config.ts` output directory matches `vercel.json`
- ✅ `node_modules` exists and `vite` is installed
- ✅ Vite binary has correct permissions (Unix systems)
- ✅ Required source files exist
- ✅ No obvious configuration conflicts

**Usage:**
```bash
npm run test:build
```

**When to use:**
- After making configuration changes
- Before committing changes
- Quick verification that setup is correct
- CI/CD pre-commit hooks

---

### 2. `test-build-full.js` - Full Build Verification

Performs a complete build and verifies the output.

**What it checks:**
- ✅ Cleans previous build
- ✅ Build completes successfully
- ✅ Build output directory is created
- ✅ `index.html` exists and is valid
- ✅ JavaScript bundle files exist
- ✅ Asset files are included
- ✅ Build output structure is correct
- ✅ Build output matches `vercel.json` configuration
- ✅ No obvious build issues
- ✅ Build size is reasonable

**Usage:**
```bash
npm run test:build:full
```

**When to use:**
- Before deploying to production
- After major code changes
- To verify the build actually works
- When troubleshooting build issues
- In CI/CD pipelines

---

### 3. `verify` - Combined Quick Check

Runs configuration checks and then builds the project.

**Usage:**
```bash
npm run verify
```

**When to use:**
- Final check before deploying
- Quick validation that everything works

---

## Understanding Test Results

### ✅ Success
Tests that pass show in green. These indicate the configuration or build is correct.

### ⚠️ Warning
Warnings are in yellow. These are non-critical issues that you should be aware of but won't break the build.

### ❌ Failure
Failures are in red. These are critical issues that need to be fixed before deployment.

---

## Common Issues and Solutions

### Issue: "vite is in devDependencies but should be in dependencies"
**Solution:** Move `vite` from `devDependencies` to `dependencies` in `package.json`

### Issue: "outputDirectory mismatch"
**Solution:** Ensure `vite.config.ts` `outDir` matches `vercel.json` `outputDirectory`

### Issue: "vite binary does not have execute permissions"
**Solution:** On Unix systems, run `chmod +x node_modules/.bin/vite` (usually indicates npm install issue)

### Issue: "Build failed"
**Solution:** Check the build error output, fix compilation errors, verify all dependencies are installed

### Issue: "index.html not found in build output"
**Solution:** Verify your build completed successfully and `index.html` exists in the source

---

## Integration with CI/CD

You can integrate these tests into your CI/CD pipeline:

### GitHub Actions Example
```yaml
- name: Test build configuration
  run: npm run test:build

- name: Full build verification
  run: npm run test:build:full
```

### Pre-commit Hook Example
```bash
#!/bin/sh
npm run test:build
```

---

## Troubleshooting

If tests fail:

1. **Read the error message carefully** - It usually tells you exactly what's wrong
2. **Check the specific test that failed** - Each test has a descriptive name
3. **Verify your configuration files** - Make sure `package.json`, `vercel.json`, and `vite.config.ts` are correct
4. **Run tests locally first** - Fix issues before pushing to CI/CD
5. **Check file permissions** - On Unix systems, ensure files have correct permissions

---

## Adding Custom Tests

To add custom tests, edit the test script files:

1. Open `scripts/test-build.js` or `scripts/test-build-full.js`
2. Add a new test using the `test()` function:
   ```javascript
   test('My custom test', () => {
     // Your test logic here
     if (somethingIsWrong) {
       throw new Error('Description of what went wrong');
     }
   });
   ```
3. The test will automatically be included in the test run

---

## Notes

- Tests are designed to run on both Windows and Unix systems
- Some permission checks only run on Unix systems
- Build tests will create and clean the build output directory
- Tests exit with code 1 on failure (useful for CI/CD)

