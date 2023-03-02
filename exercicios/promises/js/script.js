const botao = document.getElementById('botao');
const mensagem = document.getElementById('mensagem');
const carregando = document.getElementById('carregando');

botao.addEventListener('click', () => {
    botao.style.display = 'none';
    carregando.style.display = 'block';
    mensagem.style.display = 'none';

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber >= 0.5) {
                resolve();
            } else {
                reject();
            }
        }, 500);
    });

    myPromise
        .then(() => {
            mensagem.textContent = "Promessa realizada com sucesso!";
            mensagem.style.color = '#506ee5';
        })
        .catch(() => {
            mensagem.textContent = "Ocorreu um erro na promessa!";
            mensagem.style.color = "#f67968";
        })
        .finally(() => {
            botao.style.display = 'block';
            carregando.style.display = 'none'
            mensagem.style.display = 'block';
        });
});
