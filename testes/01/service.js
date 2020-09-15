const { get } = require('axios')

const url = 'https://swapi.dev/api/people'

async function obterPessoa(){

/*     const ur = `${URL}/?search=${nome}` */
    try {
        const { data } = await get(`http://localhost:3000/api/index/2`)

        const nomes = data.map( item => item.Name)

        return nomes
    } catch (error) {
        console.log('Deu ruim', error)
    }
   
}

async function obterUrl(){

    try {
        const { data } = await get(`http://localhost:3000/api/index/2`)

    const url = data.map( item => {
        return {
            Url: item.Url
        }
    })

    return url

    } catch (error) {
        console.log('Deu ruim', error)
    }
    
}



module.exports = { obterPessoa, obterUrl }
