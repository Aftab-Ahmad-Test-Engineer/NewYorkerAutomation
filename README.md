# **NYTestAutomation**

This is an automated test suite built using **Playwright** and **TypeScript** for end-to-end testing of web applications. The project is organized using the **Page Object Model (POM)** design pattern to enhance test maintainability and readability.

## **Table of Contents**

- [**Project Overview**](#project-overview)
- [**Technology Stack**](#technology-stack)
- [**Setup Instructions**](#setup-instructions)
- [**Project Structure**](#project-structure)
- [**Running Tests**](#running-tests)
- [**Generating HTML Reports**](#generating-html-reports)
  
## **Project Overview**

This project automates the testing of several web application workflows, including **user registration**, **login**, and **product interactions**. It uses **Playwright** to handle cross-browser testing and **TypeScript** for type-safe scripting.

## **Technology Stack**

- **Playwright**: End-to-end browser testing framework.
- **TypeScript**: Type-safe JavaScript superset used for scripting.
- **Page Object Model**: For organized test structure and easy maintenance.
- **Node.js**: Runtime environment to manage dependencies.
- **HTML Reports**: Functionality for generating test reports.
- **Screenshots**: Functionality for generating screenshots.

## **Setup Instructions**

### **Prerequisites**

Ensure the following are installed on your system:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### **Installation**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/NYTestAutomation.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd NYTestAutomation
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```

### **Configuration**

- Modify the `tsconfig.json` file to set up your **TypeScript** configuration.
- Adjust any environment variables or test configurations as needed.

## **Project Structure**

```plaintext
NYTestAutomation/
│
├── pages/                     # Page Object Model classes
│   ├── base.page.ts
│   ├── signup.page.ts
│   ├── login.page.ts
│   ├── menu.page.ts
│   ├── productCategory.page.ts
│   ├── getMoreClub.page.ts
│   ├── lifestyle.page.ts
│ 
│
├── tests/                     # Test files
│   ├── signUp.spec.ts
│   ├── productCategory.page.ts
│   ├── getMoreClub.page.ts
│   ├── lifestyle.page.ts
│
├── Screenshots/               # Stores screenshots for failed tests
├── playwright-report/         # Stores HTML test reports
├── test-results/              # Stores raw test results (logs)
├── package.json               # Node.js project dependencies and scripts
├── tsconfig.json              # TypeScript configuration file
└── README.md                  # Project documentation
```

## **Running Tests**

To run the tests, use the following command:

```bash
npm start
```

This will execute all **Playwright tests** defined in the `tests/` folder. By default, it runs in **headless** mode, but you can change this in the test configuration.

### **Run Specific Tests**

To run a specific test file:
```bash
npx playwright test tests/signUp.spec.ts
```

## **Generating HTML Reports**

**Playwright** automatically generates HTML reports after running the tests. To open the most recent report, use:

```bash
npx playwright show-report
```

The reports are located in the `playwright-report/` folder.


