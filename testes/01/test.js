const { deepStrictEqual, ok } = require('assert')
const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
    nome: 'Flash',
    poder: 'Speed',
    id: 1
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


  /*   it('deve cadastrar um heroi usando arquivos', async() => {
        const expected = DEFAULT_HEROI
       
        const [actual] = await database.listar(DEFAULT_HEROI.id)
        ok(actual, expected)
    })  */

    it('Deve remover heroi pelo id', async () => {
        const expected = true
        const resultado = await database.remover(1600263311252)

        deepStrictEqual(resultado, expected)

    })
})