/// <reference types="cypress" />

import { support } from "/cypress/support/commands.js"
import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'


//realizando um get
describe('Casos de teste sobre a rota /usuarios da API Serverest', () => {
   
    it('Deve buscar todos os usuarios cadastrados na Serverest', () => {
       Serverest.buscarUsuarios().then( res => {
           ValidaServerest.validarBuscaDeUsuarios(res)

       })
    })

    //realizando um post
    it('Não deve postar um novo usuario administrador existente', () => {
        cy.postarUsuarioSemSucesso ().then( res =>  {
            expect(res).to.be.a('object')
        })
    })

    // it('Deve validar o comando personalizado', () => {
    //     cy.request('GET', '/usuarios').then(res => {
    //     console.log(res)
    //     expect(res).to.be.a('object')
    //     })
    // })

    it('Deve realizar login com sucesso', () => {
        Serverest.buscarUsuariosParaLogin()
        cy.get('@usuarioLogin').then(usuario => {
            Serverest.logar(usuario).then(res => {
                ValidaServerest.validaLoginComSucesso(res)   
                Serverest.salvarBearer(res)
            })
         
         })
    })
})




// Serverest.logar(usuario).then(res =>{
    //     ValidaServerest.validaLoginComSucesso(res)       
    //     var bearer = res.body.authorization.slice(7)
    //     cy.log(bearer)
    //     console.log(res) 