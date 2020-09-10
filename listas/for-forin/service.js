const axios = require('axios')
const URL = 'https://swapi.dev/api/people'

async function obterPessoa(nome){
   const url = `${URL}/?search=${nome}`

   try {
       
    const resultado = await axios.get(url)
    return resultado.data

   } catch (error) {
       console.log('deu ruim', error)
   }
   
}


obterPessoa('2')
.then( res=>{
    return res
})
.catch( err=> console.log('Deu ruim', err))


module.exports =  { obterPessoa }