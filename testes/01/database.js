const {  readFileSync } = require('fs')


class Database {
    constructor(){
        this.NOME_ARQUIVO = 'herois.json'
    }

// outra forma de obter dados do json
//const dadosJson = require('./herois.json')
    async obterDadosArquivo(){
        const arquivo = await readFileSync(this.NOME_ARQUIVO, 'utf-8')
        return JSON.parse(arquivo.toString())
    }

    escreverArquivo(){

    }

    async listar(id){
        const dados = await this.obterDadosArquivo() 
        const dadosFiltrados = dados.filter( item => id ? (item.id===id) : true)
       
        return dadosFiltrados
    }
}



module.exports = new Database()