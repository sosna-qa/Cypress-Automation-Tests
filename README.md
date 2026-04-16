# Cypress E2E Automation Tests

## Project Description
This project contains end-to-end (E2E) automated tests written in Cypress for the demo web application:  
https://automationexercise.com/

The goal of this project is to demonstrate QA automation skills, including UI testing, form validation, negative testing, and full user flow testing.

---

## Test Scenarios

### 1. Add Product to Cart Flow
This test verifies the shopping cart functionality.

**Steps:**
- Open homepage
- Navigate to "Products" page
- Select the second product
- Open product details page
- Add product to cart
- Open cart page

**Expected result:**
- User is successfully redirected to the correct pages
- Product is added to the cart successfully
- Cart page is displayed correctly

---

### 2. User Registration Flow
This test verifies user account creation functionality.

**Steps:**
- Open homepage
- Navigate to Signup / Login page
- Enter user details
- Fill account information form
- Submit registration form

**Expected result:**
- Account is created successfully
- User is successfully logged in
- Success message is displayed

---

### 3. Login Negative Test
This test verifies login validation with incorrect credentials.

**Steps:**
- Open homepage
- Navigate to Login page
- Enter invalid email and password
- Attempt to log in

**Expected result:**
- Error message is displayed
- User is not logged in

---

## Tech Stack
- Cypress
- JavaScript
- Node.js

---

## Project Structure

```text
cypress/e2e/
├── add_to_cart.cy.js
├── register.cy.js
├── login_negative.cy.js

---

## How to run tests

```bash
npm install
npx cypress open
```
or headless mode:

```bash
npx cypress run

