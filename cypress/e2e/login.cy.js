describe('Login Negative Test', () => {

  it('should show error message for invalid login credentials', () => {

    // Step 1: Open homepage
    cy.visit('/');

    // Step 2: Navigate to Signup/Login page
    cy.contains('Signup / Login').click();

    // Step 3: Verify login form is visible
    cy.contains('Login to your account').should('be.visible');

    // Step 4: Enter invalid email
    cy.get('[data-qa="login-email"]').type('wronguser@test.com');

    // Step 5: Enter invalid password
    cy.get('[data-qa="login-password"]').type('wrongpassword123');

    // Step 6: Click login button
    cy.get('[data-qa="login-button"]').click();

    // Step 7: Verify error message is displayed
    cy.contains('Your email or password is incorrect!')
      .should('be.visible');

  });

});