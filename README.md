# Playwright E2E Automation Training Project (Company-Requested)

This repository contains a comprehensive end-to-end (E2E) test automation suite using [Playwright](https://playwright.dev/) with JavaScript/TypeScript. It was developed as part of a company-requested training program for employees, in preparation for the organization's transition to Playwright for automated testing.

## Project Structure

- `tests/` - Contains Playwright test specs (e.g., `example.spec.js`, `uiBasicsTest.spec.js`).
- `tests-examples/` - Additional or example test specs.
- `playwright.config.js` - Playwright configuration file.
- `playwright-report/` - Generated test reports (HTML format).
- `test-results/` - Raw test result files.
- `package.json` - Project dependencies and scripts.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Install Dependencies

```
npm install
```

### Running Tests

To run all tests:

```
npx playwright test
```

To run a specific test file:

```
npx playwright test tests/example.spec.js
```

### Viewing Reports

After running tests, view the HTML report:

```
npx playwright show-report
```

## Useful Commands

- Run all tests: `npx playwright test`
- Show last HTML report: `npx playwright show-report`
- Run tests in headed mode: `npx playwright test --headed`
- Debug a test: `npx playwright test --debug`

## Learn More
- [Playwright Documentation](https://playwright.dev/docs/intro)

---

Feel free to add more tests in the `tests/` directory and update this README as your project evolves.
