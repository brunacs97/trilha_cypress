/// <reference types="cypress" />


import { support } from "/cypress/support/commands.js"
import Serverest from '../services/serverest.service'
import ValidaServerest from '../services/validaServerest.service'
import cadastrarProdutoComSucesso from '../services/serverest.service'



describe('Casos de teste sobre a rota /produtos da API Serverest', () => {
   
    it('Deve buscar todos os produtos cadastrados na Serverest', () => {
        Serverest.buscarProdutos().then( res => {
            ValidaServerest.validarBuscaDeProdutos(res)

        })

    })

    context ('Logar com sucesso', () => {
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

    // it('Deve postar um novo produto com sucesso' , () => {
    //     //Login para salvar o bearer
    //     Serverest.buscarUsuariosParaLogin()
    //         cy.get('@usuarioLogin').then( usuario =>{
    //             Serverest.logar(usuario).then(res =>{
    //                 ValidaServerest.validarCadastroDeProdutoComSucesso(res)
    //                 Serverest.salvarBearer(res)
    //                 Serverest.cadastrarProdutoComSucesso().then( res => {
    //                     ValidaServerest.validarCadastroDeProdutoComSucesso(res)

    //             })
    //         })
    //      }) 

    //  })

        it('Deve postar um novo produto com sucesso', () => {
            Serverest.cadastrarProdutoComSucesso().then( res => {
                ValidaServerest.validarCadastroDeProdutoComSucesso(res)
            })
        })
    })


