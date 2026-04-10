describe('Add product to cart flow', () => {

  it('should add second product to cart and verify navigation', () => {

    // ad1: wejście na stronę i kliknięcie Products
    cy.visit('/');
    cy.get('a[href="/products"]').click();

    // ad2: weryfikacja URL
    cy.url().should('include', '/products');
    cy.url().should('eq', 'https://automationexercise.com/products');

    // ad3: kliknięcie "View Product" dla drugiego produktu
    cy.get('.features_items .product-image-wrapper')
      .eq(1) // drugi produkt (index 1)
      .contains('View Product')
      .click();

    // ad4: weryfikacja URL produktu
    cy.url().should('include', '/product_details/2');
    cy.url().should('eq', 'https://automationexercise.com/product_details/2');

    // ad5: kliknięcie Add to cart
    cy.contains('Add to cart').click();

    // ad6: weryfikacja czy pojawił się View Cart (modal)
    cy.contains('View Cart').should('be.visible');

    // ad7: kliknięcie View Cart i sprawdzenie URL
    cy.contains('View Cart').click();
    cy.url().should('include', '/view_cart');
    cy.url().should('eq', 'https://automationexercise.com/view_cart');

  });

});