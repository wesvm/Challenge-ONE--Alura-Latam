const btnEnc = document.getElementById('encrypt');
const btnDsc = document.getElementById('decrypt');

const txt = document.getElementById('txt')
const enc = document.getElementById('enc');
const dsc = document.getElementById('dsc');

const areaimg = document.getElementById('img-area')

const btnCopy = document.getElementById('copy-text')

btnEnc.addEventListener("click", function () {
    if (enc.style.display === "none") {
        enc.style.display = "block";
        btnCopy.style.display = "block";
        areaimg.style.display = "none";
        dsc.style.display = "none";
    }
});

btnDsc.addEventListener("click", function () {
    if (dsc.style.display === "none") {
        dsc.style.display = "block";
        areaimg.style.display = "none";
        enc.style.display = "none";
    }
});

btnCopy.addEventListener("click", function () {
    var copy = enc.value;
    clipboard.writeText(copy);
})