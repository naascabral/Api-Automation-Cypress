/// <reference types="cypress" />
function todosUsuarios() {
    // cy.request - client http
    return cy.request({
      method: 'GET',
      url: 'users',
      failOnStatusCode: false,
    })
  }
  
  export { todosUsuarios };
  