/// <reference types="Cypress" />

describe('login', () => {
  it('should display error msg when user cred are invalid', () => {
    cy.log('***** visit login page *****');
    cy.visit('/#/login');

    cy.log('***** assert error msg is not in the DOM *****');
    cy.get('[data-test=login-error]').should('not.exist');

    cy.log('***** fill invalid user details *****');
    cy.get('[data-test=email]').type('invalid.user@test.com');
    cy.get('[data-test=password]').type('000000');

    cy.log('***** submit *****');
    cy.get('[data-test=submit]').click();

    cy.log('***** assert error msg is  exists *****');
    cy.get('[data-test=login-error]').should('exist');
  });

  it('user should be able to login', () => {
    cy.log('***** visit login page *****');
    cy.visit('/#/login');

    cy.log('***** fill user details *****');
    cy.get('[data-test=email]').type('test1@test.com');
    cy.get('[data-test=password]').type('123456');

    cy.log('***** submit *****');
    cy.get('[data-test=submit]').click();

    cy.log('***** assert after login *****');
    cy.get('[data-test=header-username]').should('contain', 'test1');
  });
});
