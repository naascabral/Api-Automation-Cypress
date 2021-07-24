/// <reference types="cypress" />

const faker = require('faker');

let accessToken = '2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'

function addUsuarios() {
  return cy.request({
    method: 'POST',
    url: 'users',
    headers: {
        'Authorization': 'Bearer ' + accessToken
    },
    failOnStatusCode: false,
    body: {
    name: faker.name.findName(),
    email: faker.internet.email(),
    "gender": "Male",
    "status": "Active"
    }
  })
}

export { addUsuarios };
