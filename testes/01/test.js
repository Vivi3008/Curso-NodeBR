const { deepStrictEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
    Nome: "Lanterna Verde",
    poder: "Energia do Anel",
    id: 2
}

const DEFAULT_HEROI = {
    Nome: 'Super Girl',
    poder: 'Agilidade'
}


describe('Suite de manipulação de heróis', () => {
    before( async() =>{
        await database.cadastrar(DEFAULT_HEROI)
    })  
 
    it('Deve pesquisar herois usando arquivos', async() => {
        const expected = DEFAULT_ITEM_CADASTRAR
        const [resultado] = await database.listar(expected.id)

        deepStrictEqual(resultado, expected)
    }) 



   /*  it('deve cadastrar um heroi usando arquivos', async() => {
        const expected = DEFAULT_HEROI
       
        const [actual] = await database.listar(DEFAULT_HEROI.id)
        ok(actual, expected)
    })   */



     it('Deve atualizar um heroi pelo id', async ()=>{
        const expected = {
            ...DEFAULT_ITEM_ATUALIZAR,
            Nome: 'Batman',
            Poder: 'Dinheiro'
        }
        const novoDado = {
            Nome: 'Batman',
            Poder: 'Dinheiro'
        }

        await database.update(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
        const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)

        deepStrictEqual(resultado, expected)
    }) 
})