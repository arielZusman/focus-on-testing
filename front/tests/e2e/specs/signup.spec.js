/// <reference types="Cypress" />

describe('signup', () => {
  const email = Cypress.env('TEST_EMAIL');
  const password = Cypress.env('TEST_PASS');

  before(() => {
    cy.cleanDb();
  });
  it('new user should be able to sign up', () => {
    cy.log('***** visit login page *****');
    cy.visit('/#/login');

    cy.log('***** switch to signup *****');
    cy.get('[data-test=switch-form]').click();

    cy.log('***** fill user details *****');
    cy.get('[data-test=email]').type(`${email}`);
    cy.get('[data-test=password]').type(`${password}`);
    cy.get('[data-test=username]').type('Puki muki');

    cy.log('***** submit *****');
    cy.get('[data-test=submit]').click();

    cy.log('***** assert after login *****');
    cy.url().should('eq', 'http://localhost:8080/#/');
    cy.get('[data-test=header-username]').should('contain', 'Puki muki');
  });

  it('should show error when trying to sign up with existing email', () => {
    cy.log('***** visit login page *****');
    cy.visit('/#/login');

    cy.log('***** switch to signup *****');
    cy.get('[data-test=switch-form]').click();

    cy.log('***** fill user details *****');
    cy.get('[data-test=email]').type(`${email}`);
    cy.get('[data-test=password]').type(`${password}`);
    cy.get('[data-test=username]').type('Puki muki');

    cy.log('***** submit *****');
    cy.get('[data-test=submit]').click();

    cy.log('***** assert error msg is  exists *****');
    cy.get('[data-test=login-error]').should('exist');
  });
});
