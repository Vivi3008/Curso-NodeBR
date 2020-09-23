
const Commander= require('commander')
const database = require('./database')
const Heroi = require('./heroi')

async function main(){
    Commander
        .version('Versão 1.0')
        
        .option('-n, --nome [value]', "Nome do Herói")
        .option('-p, --poder [value]', "Poder do heroi")
        .option('-i, --id [value]', "Id do heroi")

        .option('-c, --cadastrar', "Cadastrar um Herói")
        .option('-l, --listar', "Listar um Heroi")
        .option('-r, --remover [value]', "Remover um heroi pelo id")
        .option('-u, --atualizar [value]', "Atualizar um heroi")
        .parse(process.argv)

    const heroi = new Heroi(Commander)

    try {
        if(Commander.cadastrar){
            const id = heroi.id === undefined ? Date.now() : heroi.id
            const novoHeroi = {
                id,
                nome: heroi.nome,
                poder: heroi.poder
            }
            const resultado = await database.cadastrar(novoHeroi)
            if(!resultado){
                console.error('Heroi nao foi cadastrado!')
                return
            } 
           
            console.log('Heroi cadastrado com sucesso')
        }

        if (Commander.listar){
         const resultado = await database.listar()
         console.log(resultado)
         console.log("Total: ", resultado.length, " herois")
        }

        if (Commander.remover){
            const id = heroi.id
           
            const resultado = await database.remover(id)
            if (!resultado) console.error('Erro ao deletar')
            console.log('Heroi deletado com sucesso') 
        }
        
        if(Commander.atualizar){
            const idParaAtualizar = parseInt(Commander.atualizar)
            //remover todas as chaves que estiverem com undefined ou null
            const dado = JSON.stringify(heroi)
            const heroiAtualizar = JSON.parse(dado)
            
           const resultado = await database.update(idParaAtualizar, heroiAtualizar)
            if (!resultado) console.error('Erro ao atualizar!')
            console.log('Heroi atualizado com sucesso!') 
        }

    } catch (error) {
       console.error('Erro de comando', error) 
    }

}

main()