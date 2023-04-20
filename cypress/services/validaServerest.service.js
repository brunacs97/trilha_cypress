/// <reference types="cypress" />


import Serverest from '../services/serverest.service'
import validaServerest from '../services/validaServerest.service'

export default class ValidaServerest {
    //Validações das ações que podemos realizar na API
    //Validar a busca de usuários
    //Validar o cadastro de novos usuários 
    //Validar login

    static validarBuscaDeUsuarios(resposta){
        expect(resposta.body.quantidade).to.be.greaterThan(10)
        
    }

    static validaLoginComSucesso(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body).to.haveOwnProperty('authorization')

    }

    static validarBuscaDeProdutos(resposta){
        expect(resposta).to.be.a('object')
        expect(resposta.body.quantidade).to.be.a('number')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('nome')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('preco')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('descricao')
        expect(resposta.body.produtos[0]).to.haveOwnProperty('quantidade')
    }

    static validarCadastroDeProdutoComSucesso(resposta){
        {
            console.log(resposta)
        expect(resposta).to.be.a('object')
        expect(resposta.body.message).to.be.a('string')
        expect(resposta.body.message).to.be.eq('Cadastro realizado com sucesso')
        expect(resposta.body).to.haveOwnProperty('_id')
        }
    }

}