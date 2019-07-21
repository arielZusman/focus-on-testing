/// <reference types="Cypress" />
const API_URL = Cypress.env('API_URL');

//
Cypress.Commands.add('login', () => {
  const email = Cypress.env('USER_EMAIL');
  const password = Cypress.env('USER_PASS');

  return cy
    .request({
      url: `${API_URL}/auth/login`,
      method: 'POST',
      body: {
        email,
        password
      }
    })
    .then(({ body }) => {
      localStorage.setItem('loggedInUser', JSON.stringify(body));
    });
});

Cypress.Commands.add('cleanDb', () => {
  return cy.login().then(() => {
    cy.request({
      url: `${API_URL}/user`,
      method: 'GET'
    })
      .then(({ body: users }) => {
        const testEmail = Cypress.env('TEST_EMAIL');
        const userToDelete = users.find(({ email }) => email === testEmail);

        return userToDelete ? userToDelete._id : null;
      })
      .then(id => {
        if (id) {
          cy.request({
            url: `${API_URL}/user/${id}`,
            method: 'DELETE'
          });
        }

        return;
      });
  });
});
