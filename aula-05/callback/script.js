// buscar o usuario
function findUser(username, password,callback){
    console.log("buscando user...")
    callback(username,password,'password',generatingToken)
}

//Verificar meu usuario e minha senha
function comparePassword(username, password, hashPassword,callback){
    console.log("comparando usuario")
    callback(username, password)
}

function generatingToken(username, password){
    console.log('geracao do token - usuario logado')
}

// informação inserida na tela
function login (username, password,callback){
    console.log('Login user')
    callback(username, password,comparePassword)
    console.log('login efetuado')
}

login('user', 'password',findUser)