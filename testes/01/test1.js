const assert = require('assert')
const { obterPessoa, obterUrl } = require('./service')

describe('Teste da API Mulheres na tecnologia', () => {

    it('buscar a Ada com o formato correto', async () => {
        const expected = [  'Radia Perlman',
        'Frances Allen',
        'Ada Lovelace',
        'Karen Spärck Jones',
        'Hedy Lamarr '
        ]
        const nomeBase = 'Ada Lovelace'
        const resultado = await obterPessoa(nomeBase)

        assert.deepStrictEqual(resultado, expected)


    })
})

describe('Teste API Mulheres na Tecnologia', ()=>{
    it('Deve buscar as URL', async ()=>{
        const expected = [
            {
              Url: 'https://pt.wikipedia.org/wiki/Radia_Perlman'
            },
            {
              Url: 'https://pt.wikipedia.org/wiki/Frances_Allen'
            },
            {
              Url: 'https://pt.wikipedia.org/wiki/Ada_Lovelace'
            },
            {
              Url: 'https://pt.wikipedia.org/wiki/Karen_Sp%C3%A4rck_Jones'
            },
            {
              Url: 'https://pt.wikipedia.org/wiki/Hedy_Lamarr'
            }
          ]
       

        const resultado = await obterUrl()

        assert.deepStrictEqual(resultado, expected)
    })
})