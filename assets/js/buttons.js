const btnEnc = document.getElementById('encrypt');
const btnDsc = document.getElementById('decrypt');

const txt = document.getElementById('txt')
const enc = document.getElementById('enc');
const dsc = document.getElementById('dsc');

const areaimg = document.getElementById('img-area')

const btnCopy = document.getElementById('copy-text')

function setEstadoBtn(btnBlue, btnWhite) {
    btnBlue.style.backgroundColor = '#0A3871';
    btnWhite.style.backgroundColor = '#D8DFE8';
    btnBlue.style.color = '#D8DFE8';
    btnWhite.style.color = '#0A3871';
}

btnEnc.addEventListener("click", function () {
    if (enc.style.display === "none") {
        enc.style.display = "block";
        btnCopy.style.display = "block";
        areaimg.style.display = "none";
        dsc.style.display = "none";
        setEstadoBtn(btnEnc, btnDsc);
    }
});

btnDsc.addEventListener("click", function () {
    if (dsc.style.display === "none") {
        dsc.style.display = "block";
        areaimg.style.display = "none";
        enc.style.display = "none";
        setEstadoBtn(btnDsc, btnEnc);
    }
});

function setEstado(texto, icono) {
    texto.innerHTML = 'Copiado';
    icono.innerHTML = 'task_alt';
    setTimeout(function () {
        texto.innerHTML = 'Copiar';
        icono.innerHTML = 'content_copy';
    }, 1500);
}

btnCopy.addEventListener("click", function (e) {
    e.preventDefault();

    const elemento = enc.style.display === "block" ? enc : dsc;
    const icono = btnCopy.querySelector('.material-symbols-outlined');
    const texto = btnCopy.querySelector('p');

    clipboard.writeText(elemento.value);
    setEstado(texto, icono);

    //
    // if (enc.style.display === "block") {
    //     let copy = enc.value;
    //     clipboard.writeText(copy);
    //     texto.innerHTML = 'Copiado';
    //     icono.innerHTML = 'task_alt';
    //     setTimeout(function () {
    //         texto.innerHTML = 'Copiar';
    //         icono.innerHTML = 'content_copy';
    //     }, 1000)
    // } else if (dsc.style.display === "block") {
    //     let copy = dsc.value;
    //     clipboard.writeText(copy);
    //     texto.innerHTML = 'Copiado';
    //     icono.innerHTML = 'task_alt';
    //     setTimeout(function () {
    //         texto.innerHTML = 'Copiar';
    //         icono.innerHTML = 'content_copy';
    //     }, 1000)
    // } else {
    //     //no copy
    // }

})