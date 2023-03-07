
// Criação e execução de 1 promessa
// const minhaPromessa = new Promise((resolve,reject) => {
//   const nome = "Everton"
//   if(nome === "Everton"){
//     resolve("Usuário Everton encontrado")
//   }else{
//     reject("O usuário Everton não foi encontrado")
//   }
// })

// minhaPromessa.then((sucesso) =>{
//     console.log(sucesso)
// }).catch((error) =>{
//     console.log(error)
// })

// Resolver varias promessas
// all
// const promisse1 = new Promise((resolve,reject) => {
//     console.log('promessa 1')
//     reject('promessa sucesso 1')
//   })

//   const promisse2 = new Promise((resolve,reject) => {
//     console.log('promessa 2')
//     reject('promessa sucesso 2')
//   })

//   Promise.all([promisse1, promisse2]).then((sucesso) =>{
//     console.log(sucesso)
//   }).catch((error) =>{
//     console.log(error, 'erro ')
// })

// Promise.allSettled([promisse1, promisse2]).then((sucesso) =>{
//     console.log(sucesso);
// }).catch((error) =>{
//     console.log(error)
// })

//Encadeamento de then's

const minhaPromessa = new Promise((resolve,reject) => {
    const nome = "Everton"
    if(nome === "Everton"){
      resolve("Usuário Everton encontrado")
    }else{
      reject("O usuário Everton não foi encontrado")
    }
  })

  minhaPromessa.then((data) =>{
    console.log(data);
    return data.toLowerCase()
  }).then((stringModificada) =>{
    console.log(stringModificada)
  })
