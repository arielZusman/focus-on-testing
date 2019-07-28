/// <reference types="Cypress" />

describe('Add review', () => {
  before(() => {
    cy.login();
  });

  it('user should be able to add a review', () => {
    cy.log('***** visit home page *****');
    cy.visit('/');

    cy.log('***** go to car details page *****');
    cy.get('[data-test=car-details]:first-child a').click();

    cy.log('***** fill review *****');
    cy.get('[data-test=review-form-content]').type('Best car ever');

    cy.log('***** submit review *****');
    cy.get('[data-test=submit]').click();

    // within is used to scope the commands to context of the element
    // see: https://docs.cypress.io/api/commands/within.html#Syntax
    cy.get('[data-test=review-preview]:last-child').within(() => {
      cy.log('***** assert review is in the dom *****');
      cy.get('[data-test=review-content]').should('contain', 'Best car ever');
      cy.get('[data-test=review-user]').should('contain', 'test1');
    });
  });
});
