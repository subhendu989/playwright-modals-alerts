```markdown
# Playwright Modal & Alert Automation – DemoQA Practice

This repository contains Playwright automation scripts focused on handling modals and alerts on [DemoQA](https://demoqa.com/) practice websites. It is designed to strengthen practical test automation skills and browser interaction knowledge.

## Features

- Open and close small and large modals
- Handle JavaScript alerts and confirm dialogs
- Accept or dismiss alerts
- Verify UI changes after interactions
- Practice real-world automation scenarios

## Technologies & Tools

- [Playwright](https://playwright.dev/)
- Node.js
- JavaScript

## Folder Structure



playwright-automation/
│
├─ README.md
├─ package.json
├─ package-lock.json
├─ tests/
│ ├─ modal.spec.js
│ ├─ confirm_alert.spec.js
│ └─ small_modal_close.spec.js
└─ node_modules/

## Usage

1. Clone the repository:
   ```bash
   git clone <repository-url>
````

2. Navigate to the project folder:

   ```bash
   cd playwright-automation
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run a specific test script:

   ```bash
   node tests/<script-name>.js
   ```
5. Observe browser automation and console logs for verification.

### Example:

```bash
node tests/confirm_alert.spec.js
```

* Browser will open, the alert will appear, and Playwright will automatically click OK.
* Console will display the alert message and result.

## Notes

* All scripts are configured with `headless: false` to visually observe browser interactions.
* For headless execution, modify the browser launch option accordingly.

## Purpose

This project serves as a practical portfolio example demonstrating:

* Playwright test automation skills
* Handling modals and alerts
* Browser UI interactions
* End-to-end automation scenarios on demo websites

```

