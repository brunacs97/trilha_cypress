// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('postarUsuarioSemSucesso', () => { 
    return cy.request ({
        method: 'POST',
        url: '/usuarios',
        failOnStatusCode: false,
        body:{
            "nome": "Fulano da Silva",
            "email": "fulano@qa.com",
            "password": "teste",
            "administrador": "true"
        }
    })
})

Cypress.Commands.add('rest', (method = 'GET', url = '/', body = null, failOnStatusCode = false) => {
    return cy.request({
            method: method,
            url: url,
            failOnStatusCode: failOnStatusCode,
            body: body
    })
})

Cypress.Commands.add('logar', (email, senha) => {
   return cy.request('POST', 'https://serverest.dev/login', {
            "email": email,
            "password": senha
    })
})

Cypress.Commands.add('buscarUsuarioParaLogin', () => {
    cy.request('GET', '/usuarios').then(res => {
        expect(res.body).to.haveOwnProperty('usuarios')
        return {
            email: res.body.usuarios[0].email,
            senha: res.body.usuarios[0].passoword
        }
        
    })
})