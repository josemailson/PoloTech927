function primeiroFuncao(){
    return new Promise((resolve)=>{
        setTimeout(()=> {
            console.log('Esperou isso aqui')
            reject()
        },1000)
    }
    )   
}

async function segundaFuncao(){
    console.log('Iniciou')
    await primeiroFuncao()
    console.log('Terminou')
}

segundaFuncao()