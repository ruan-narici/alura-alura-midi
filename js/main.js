const listaTeclas = document.querySelectorAll('.tecla');
const listaSons = document.querySelectorAll('body>audio');

function tocaSom(idElementAudio) {
    listaSons[idElementAudio].play();
}

for (let i = 0; i < listaTeclas.length; i++) {
    listaTeclas[i].onclick = function () {
        tocaSom(i);
    }
}
