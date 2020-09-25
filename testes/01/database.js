const {  readFileSync, writeFileSync } = require('fs')


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

    async escreverArquivo(dados){
        await writeFileSync(this.NOME_ARQUIVO, JSON.stringify(dados))
        return true
    }

    async cadastrar(heroi){
        const dados = await this.obterDadosArquivo()
     
        const dadosFinal = [
           ...dados,
           heroi
        ]

        const resultado = await this.escreverArquivo(dadosFinal)
        return resultado
    }

    async listar(id){
        const dados = await this.obterDadosArquivo() 
        const dadosFiltrados = dados.filter( item => id ? (item.id===id) : true) 
       
        return dadosFiltrados
    }

    async remover(id){
        if(!id){
            return await this.escreverArquivo([])
        }

        const dados = await this.obterDadosArquivo()
        const index = dados.findIndex( item => item.id===parseInt(id) )
        
        if(index === -1){
            throw Error('O usuario informado nao existe')
        }

        //remove o id do array
        dados.splice(index, 1)
        
        const resultado = await this.escreverArquivo(dados)
        return resultado 
    }

    async update(id, modifications){
       
        const dados = await this.obterDadosArquivo()

        const index = dados.findIndex(item => item.id === parseInt(id))
     
        if(id === -1) throw Error("O usuario informado nao existe")

        const atual = dados.filter( item => item.id === id)

        const objetoAtualizar = JSON.parse(JSON.stringify(modifications)) 

        const dadosAtualizar = Object.assign(...atual, modifications)
       
        dados.splice(index, 1)

        return await this.escreverArquivo([
            ...dados,
            dadosAtualizar
        ])

    }
}



module.exports = new Database()