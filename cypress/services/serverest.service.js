
/// <reference types="cypress" />


import Serverest from '../services/serverest.service'
import validaServerest from '../services/validaServerest.service'

const URL_USUARIOS = '/usuarios'
const URL_LOGIN = '/login'
const URL_PRODUTOS = '/produtos'
const URL_CARRINHOS = '/carrinhos'




export default class ValidaServerest {
    //Ações que podemos realizar na API
    //Buscar usuários
    //Cadastrar novos usuários 
    //Realizar login

    // static buscarUsuarios(){
    //     return cy.request('GET', 'URL_USUARIOS')
    // }


    static buscarUsuarios(){
         return cy.request({
                method: 'GET',
                url: 'https://serverest.dev/usuarios'
            }).then((res) => {
                expect(res.status).to.be.equal(200)
            })
        }
    
    // static buscarUsuariosParaLogin(){
    //     cy.request(URL_USUARIOS).then( res =>{
    //         cy.wrap({
    //             email: res.body.usuarios[0].email,
    //             password: res.body.usuarios[0].password
    //         }).as('usuarioLogin')
    //     })
    // }

    static buscarUsuariosParaLogin(){
        cy.request('https://serverest.dev/usuarios').then( res =>{
            cy.wrap({
                email: res.body.usuarios[0].email,
                password: res.body.usuarios[0].password
            }).as('usuarioLogin')
        })
    }

    // static buscarUsuariosParaLogin(){
    //     let res = this.buscarUsuarios().then( res => {
    //         return usuario = {
    //             email: res.body.usuarios[0].email,
    //             senha: res.body.usuarios[0].password
    //         }
    //     })
    // }

    static logar(usuario){
        return cy.request('POST', 'https://serverest.dev/login', usuario)
    }

    static salvarBearer(resposta){
        Cypress.env('bearer', resposta.body.authorization.slice(7))   
    }

    //Produtos//

    static buscarProdutos(){
        return cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'
        }).then((res) => {
           
        })
    }



//     static cadastrarProdutoComSucesso(){
//         return cy.request({
//                 method: 'POST',
//                 url:   'https://serverest.dev/produtos',
//                 body: {
//                     "nome": "Teste",
//                     "preco": 350,
//                     "descricao": "Teste mouse",
//                     "quantidade": 7
                    
//                 },
//                 failOnStatusCode: true,
//                 auth:{
//                     bearer:Cypress.env("bearer")
//                 }
//         })
//     }
//  }
// static cadastrarProdutoComSucesso(){
//     return cy.request('POST', 'https://serverest.dev/produtos', { nome: 'teste', preco:47, descricao: "Teste mouse",
//     quantidade: 7,failOnStatusCode: false,auth:{bearer:Cypress.env("bearer")}}).then((response) => {
//           // response.body is automatically serialized into JSON
//           expect(response.body).to.have.property('nome', 'teste','preco', 47, 'descricao' , 'Teste mouse', 'quantidade', 7) // true
//         }
//       )
// }
// }

static cadastrarProdutoComSucesso(){
    return cy.request({
        method: 'POST',
        url: 'https://serverest.dev/produtos', // baseUrl is prepend to URL
        body: {
            nome: 'teste',
            preco:47, 
            descricao: "Teste mouse",
            quantidade: 7
    },
    auth:{ bearer:Cypress.env("bearer")},
    failOnStatusCode: true,
  
})
  
}
}