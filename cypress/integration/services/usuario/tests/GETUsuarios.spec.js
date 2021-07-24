import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('GET todos os usuarios', () => {
  it('Listar todos Usuarios', () => {
    GETUsuarios.todosUsuarios().should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.not.null;
      expect(response.body.data[0]).to.be.not.null;
      cy.log(JSON.stringify(response))
      return (response.body);
    })
  });
});