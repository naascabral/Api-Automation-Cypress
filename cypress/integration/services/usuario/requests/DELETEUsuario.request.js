/// <reference types="cypress" />


let accessToken = '2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'

function deleteUsuario(userId) {
  return cy.request({
    method: 'DELETE',
    url: `users/${userId}`,
    headers: {
        'Authorization': 'Bearer ' + accessToken
    },
    failOnStatusCode: false,
  })
}
export { deleteUsuario };