//promises
main()

async function main(){
try {
    console.time('tempo execução')
    const usuario = await obterUsuario()
    /* const endereco = await obterEndereço(usuario.id)
    const telefone = await obterTelefone(usuario.id) */
    const resultado = await Promise.all([
        obterEndereço(usuario.id),
        obterTelefone(usuario.id)
    ])
    const endereco = resultado[0]
    const telefone = resultado[1]

    console.log(`Nome: ${usuario.nome},
     Endereço: ${endereco.rua}, ${endereco.numero},
     Telefone: (${telefone.ddd}) ${telefone.numero}
    `)
} catch (error) {
    console.log('Deu ruim', error)
}
    console.timeEnd('tempo execução')
}

function obterUsuario(){
    const promise = new Promise((resolve,reject)=>{
        setTimeout( () => {
            return resolve(
                {
                    id:1,
                    nome:'Viviane',
                    idade: 34
                }
            )   
        }, 1000)
    })
    return promise
}


function obterEndereço(idUsuario){
    const promise = new Promise((resolve,reject)=>{
        setTimeout( () => {
            return resolve (
                {
                    rua: 'Sao Paulo',
                    numero: 2
                }
            )
        }, 2000)
    })
    return promise
}

function obterTelefone(idUsuario){
    const promise = new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            return resolve(
                {
                    numero: 983386460,
                    ddd: 62
                }
            ) 
        }, 2000)
    })
    return promise 
}

