/// <reference types="cypress" />

import { support } from "/cypress/support/commands.js"
import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'


//realizando um get
describe('Casos de teste sobre a rota /login da API Serverest', () => {

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



