import * as POSTUsuarios from '../requests/POSTUsuarios.request';
import * as GETUsuario from '../requests/GETUsuario.request';

describe('Post Usuarios', () => {
    it('Adicionar novos Usuarios e validar o usuario criado', () => {
        POSTUsuarios.addUsuarios().then((resPostUser) => {
            GETUsuario.BuscaUsuario(resPostUser.body.data.id).should((responseget) => {
            expect(resPostUser.status).to.eq(200);
            cy.log(JSON.stringify(responseget));
            const userId = resPostUser.body.data.id 
            cy.log("user id is: " + userId)
            expect(resPostUser.body.data).has.property('id',userId);
            expect(resPostUser.body.data).has.property('email');
            expect(resPostUser.body.data).has.property('name');
            expect(resPostUser.body.data).has.property('status');
            expect(resPostUser.body.data).has.property('gender');
            })
        })
    });
  });

 