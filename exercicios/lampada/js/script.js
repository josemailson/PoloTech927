window.addEventListener('load', () => {
    const switchElement = document.querySelector('.switch input');
    const lampadaLigada = document.querySelector('#lampada-ligada');
    const lampadaDesligada = document.querySelector('#lampada-desligada');

    switchElement.checked = false;

    switchElement.addEventListener('change', () => {
        if (switchElement.checked) {
            lampadaLigada.style.display = 'block';
            lampadaDesligada.style.display = 'none';
        } else {
            lampadaLigada.style.display = 'none';
            lampadaDesligada.style.display = 'block';
        }
    });
});