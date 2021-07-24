import * as POSTUsuarios from '../requests/POSTUsuarios.request';
import * as DELETEUsuario from '../requests/DELETEUsuario.request';
import * as GETUsuario from '../requests/GETUsuario.request';

describe('DELETE Usuarios', () => {
    it('Adicionar novos Usuarios, Deletar usuario novo criado e Validar se o usuario foi deletado', () => {
        POSTUsuarios.addUsuarios().then((resPostUser) => {
            DELETEUsuario.deleteUsuario(resPostUser.body.data.id).should((responsedelete) => {
                GETUsuario.BuscaUsuario(resPostUser.body.data.id).should((responseget) => {
                    expect(resPostUser.status).to.eq(200);
                    const userId = resPostUser.body.data.id 
                    cy.log("user id is: " + userId)
                    expect(resPostUser.body.data).has.property('id',userId);
                    expect(resPostUser.body.data).has.property('email');
                    expect(resPostUser.body.data).has.property('name');
                    expect(resPostUser.body.data).has.property('status');
                    expect(resPostUser.body.data).has.property('gender');

                    // Validar em tela os nomes alterados 

                    cy.log(JSON.stringify(resPostUser.body.data.name));
                    
                    //ações do get usuario
                    expect(responseget.status).to.eq(200);
                    cy.log(JSON.stringify(responseget.body.data));
                })
            })
        })
    });
  });

 