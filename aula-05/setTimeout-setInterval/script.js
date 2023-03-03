
// parte do setTimeout
// console.log('Antes do set Timeout');

// setTimeout(() => {
//     console.log('execuçao')
// },2000)
// console.log('Depois do set Timeout');

// // parte setInterval

// function ola(){
//     console.log('Ola')
// }

// setInterval(ola,1000) 


// Time - Stop

var internal, count = 0;

var timer = function(){
    internal = setInterval(() => {
        console.log(count);
        count++
    },200)
}

var stop = function(){
    setTimeout(() =>{
        clearInterval(internal)
        console.log('executei')
    },2000)
}

//timer()
//stop()