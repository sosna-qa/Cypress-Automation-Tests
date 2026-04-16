describe('Add product to cart flow', () => {

  it('should add second product to cart and verify navigation', () => {

    // Step 1: Open homepage
    cy.visit('/');

    // Step 2: Navigate to Products page
    cy.get('a[href="/products"]').click();

    // Step 3: Verify URL is correct (Products page)
    cy.url().should('include', '/products');
    cy.url().should('eq', 'https://automationexercise.com/products');

    // Step 4: Click "View Product" for the second product
    cy.get('.features_items .product-image-wrapper')
      .eq(1) // second product (index 1)
      .contains('View Product')
      .click();

    // Step 5: Verify product details page URL
    cy.url().should('include', '/product_details/2');
    cy.url().should('eq', 'https://automationexercise.com/product_details/2');

    // Step 6: Click "Add to cart"
    cy.contains('Add to cart').click();

    // Step 7: Verify that "View Cart" button is visible (modal appears)
    cy.contains('View Cart').should('be.visible');

    // Step 8: Navigate to cart page and verify URL
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');
    cy.url().should('eq', 'https://automationexercise.com/view_cart');

  });

});
