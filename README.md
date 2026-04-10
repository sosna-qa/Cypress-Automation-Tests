# Cypress E2E Test – Add Product to Cart

## Project description
This test automates a user flow on https://automationexercise.com/
The scenario covers navigating to the products page, selecting a product, adding it to the cart, and verifying the cart page.

---

## Test scenario

### Test: Add product to cart flow

#### Steps:
1. Open homepage
2. Navigate to "Products" page
3. Select the second product (Men T-shirt)
4. Open product details page
5. Add product to cart
6. Open shopping cart

---

## Expected result
- User is redirected to correct products page
- Product details page is displayed correctly
- Product is successfully added to cart
- Cart page is displayed after navigation
- URL changes match expected pages

---

## Tech stack
- Cypress
- JavaScript
- Node.js

---

## How to run tests

```bash
npm install
npx cypress open
```
or headless mode:

```bash
npx cypress run

