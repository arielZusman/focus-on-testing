/// <reference types="Cypress" />

describe('Add to cart', () => {
  before(() => {
    cy.login();
  });

  it('user should be able to add car to cart', () => {
    cy.log('***** visit home page *****');
    cy.visit('/');

    cy.log('***** click add to cart button *****');
    cy.get('[data-test=car-details]:first-child button').click();

    cy.get('[data-test=cart-item]:first-child').should(
      'contain',
      'Alfa Romeo Stelvio'
    );
  });
});
