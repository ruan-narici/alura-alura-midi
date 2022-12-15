const listaTeclas = document.querySelectorAll('.tecla');
const listaSons = document.querySelectorAll('body>audio');

function tocaSom(idElementAudio) {
    if (listaSons[idElementAudio] != null) {
        listaSons[idElementAudio].play();
    }
    else {
        console.log('Elemento não identificado');
    }
}

for (let i = 0; i < listaTeclas.length; i++) {
    listaTeclas[i].onclick = function () {
            tocaSom(i);
    } 
//add class ativa
    listaTeclas[i].onkeydown = function (event) {
        if (event.code === 'Enter' || 
            event.code === 'Space') {
                listaTeclas[i].classList.add('ativa');
    }
    }
//remove class ativa
    listaTeclas[i].onkeyup = function () {
        listaTeclas[i].classList.remove('ativa');
    }
}
