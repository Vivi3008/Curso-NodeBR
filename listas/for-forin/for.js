const service = require('./service')

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let indice = 0; indice <= this.length - 1; indice++) {
        const resultado = callback(this[indice], indice)
        novoArrayMapeado.push(resultado)
    }

    return novoArrayMapeado;
}

async function main(){
    //com for of
   console.time('tempo execução')
    try {
        const result = await service.obterPessoa('a')
        const resp = result.results
        const names = []
     
      for (const res of resp) {
          names.push(res.name)
      }
        
      console.log(names) 
    } catch (error) {
        console.log(error)
    }
    console.timeEnd('tempo execução')

//com array map
    try {
        console.time('tempo')
        const result = await service.obterPessoa('a')
        const res = result.results

        const names = res.map( item => item.name)
        console.log(names)

    } catch (error) {
        console.error('Deu Ruim', error)
    }
    console.timeEnd('tempo')
}

main()