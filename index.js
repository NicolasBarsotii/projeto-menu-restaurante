var hamburger1 = window.document.getElementById("hamburger1")
var hamburger2 = window.document.getElementById("hamburger2")
var hamburger3 = window.document.getElementById("hamburger3")
var pastel1 = window.document.getElementById("pastel1")
var pastel2 = window.document.getElementById("pastel2")
var pastel3 = window.document.getElementById("pastel3")
var setaesquerda = window.document.getElementById("setaesquerda")
var setadireita = window.document.getElementById("setadireita")

function rolarParaDireita() {
    pastel1.style = "display: flex"
    hamburger1.style = "display:none"
    hamburger2.style = "display: none"
    pastel2.style = "display: flex"
    setaesquerda.style = "display: flex; padding-left:50px"
    setadireita.style = "display: none"
}

function rolarParaEsquerda() {
    pastel1.style = "display: none"
    hamburger1.style = "display:flex; padding-left:50px"
    hamburger2.style = "display: flex"
    pastel2.style = "display: none"
    setaesquerda.style = "display: none"
    setadireita.style = "display: flex"
}