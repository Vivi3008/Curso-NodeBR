const { deepStrictEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed'
}

const DEFAULT_ITEM_ATUALIZAR = {
    "poder": "Força",
    "id": 1600863110181
}

const DEFAULT_HEROI = {
    Nome: 'Super Girl',
    poder: 'Agilidade'
}


describe('Suite de manipulação de heróis', () => {
     before( async() =>{

        await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    })   
 
    it('Deve pesquisar herois usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)

        deepStrictEqual(resultado, expected)
    }) 


   it('Deve remover um heroi pelo id', async() => {
        const expected = true
        const resultado = await database.remover(1600690770875)

        ok(resultado,expected)
    }) 



   it('Deve atualizar um heroi pelo id', async ()=>{
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            Nome: 'Batman',
            Poder: 'Dinheiro'
        }
        const novoDado = {
            Nome: 'Batman'
        }

        await database.update(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)

        deepStrictEqual(resultado, expected)
    })   
})