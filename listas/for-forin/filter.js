const { obterPessoa } = require('./service') // desesturuturando a funcao obterPessoa de service

Array.prototype.meuFilter = function (callback) {
    const lista = []
    for (index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        // 0, "", null, undefined === false
        if (!result) continue;
        lista.push(item)
    }
    return lista;
}


async function main(){
    const { results } = await obterPessoa('a')
   
   const res = results.filter(item =>  item.name.toLowerCase().indexOf('lars', item)!==-1)
    
   const nomes = res.map(item => item.name)
   
   console.table(nomes)
}

main()