const { obterPessoa } = require('./service')

Array.prototype.meuReduce = function (callback, valorInicial) {
    let valorFinal = typeof valorInicial !== 'undefined' ? valorInicial : this[0]
    let index = typeof valorInicial !== 'undefined' ? 0 : 1

    for (index; index <= this.length - 1; index++) {
        valorFinal = callback(valorFinal, this[index], this)
    }

    return valorFinal

}

async function main(){
    const { results } = await obterPessoa('a')

    const pesos = results.map( item => parseInt(item.height))

    console.table(pesos)

    const total = pesos.meuReduce((total, next)=>{
        return total + next
    })

    console.log('Soma Total: ', total)
}

main()