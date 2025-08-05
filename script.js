import {PALAVRAS_RUINS} from "./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    //alert("Fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
    //let palavras = texto.split(/\s+/);  "retirar espaços"
    //let palavras = texto.split(/[^a-zA-Z]+/); "letras minusculas e maiusculas"
    let palavras = texto.split(/\P{L}+/u);  // \P negação;  {L} conjunto de letras; + uma ou mais ocorrências; u Unicode

    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencias(palavras);

    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }