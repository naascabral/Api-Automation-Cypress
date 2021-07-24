/// <reference types="cypress" />



function BuscaUsuario(userId) {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: `users/${userId}`,
      failOnStatusCode: false,
    })
  }
  
  export { BuscaUsuario };
  