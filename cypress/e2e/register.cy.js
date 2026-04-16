describe('User Registration', () => {

  it('should register new user successfully', () => {

    // Step 1: Open homepage
    cy.visit('/');

    // Step 2: Go to Signup/Login page
    cy.contains('Signup / Login').click();

    // Step 3: Verify "New User Signup" is visible
    cy.contains('New User Signup!').should('be.visible');

    // Step 4: Generate unique user data
    const timestamp = Date.now();
    const name = 'TestUser';
    const email = `test_${timestamp}@mail.com`;

    // Step 5: Enter name and email
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);

    // Step 6: Click Signup
    cy.get('[data-qa="signup-button"]').click();

    // Step 7: Fill account information
    cy.contains('Enter Account Information').should('be.visible');

    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('Password123');

    cy.get('[data-qa="days"]').select('10');
    cy.get('[data-qa="months"]').select('May');
    cy.get('[data-qa="years"]').select('1995');

    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // Address info
    cy.get('[data-qa="first_name"]').type('John');
    cy.get('[data-qa="last_name"]').type('Doe');
    cy.get('[data-qa="company"]').type('TestCompany');
    cy.get('[data-qa="address"]').type('Street 123');
    cy.get('[data-qa="address2"]').type('Apt 1');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('Texas');
    cy.get('[data-qa="city"]').type('Dallas');
    cy.get('[data-qa="zipcode"]').type('12345');
    cy.get('[data-qa="mobile_number"]').type('123456789');

    // Step 8: Create account
    cy.get('[data-qa="create-account"]').click();

    // Step 9: Verify account created
    cy.contains('Account Created!').should('be.visible');

    // Step 10: Continue
    cy.get('[data-qa="continue-button"]').click();

    // Step 11: Verify logged in user
    cy.contains(`Logged in as ${name}`).should('be.visible');

  });

});