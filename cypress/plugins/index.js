/// <reference types="cypress" /> 

// ***********************************************************



const fs = require('fs-extra');
const path = require ('path');

function buscarArquivoDeConfig(arquivo){
  const caminhoDoArquivo = path.resolve('.', 'cypress', 'config', `${arquivo}.json`)
  return fs.readJSON(caminhoDoArquivo)
}

module.exports = (on, config) => {
  const arquivo = config.env.configFile || 'dev'
  return buscarArquivoDeConfig(arquivo)
}

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {

allureWriter(on, config); return config; };

