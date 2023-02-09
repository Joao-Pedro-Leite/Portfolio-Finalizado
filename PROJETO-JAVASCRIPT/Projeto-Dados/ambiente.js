function rolar(){ 

//Muda o dado 1 
var dado1 = Math.floor(Math.random() *6 +1)
var randomImage1 = "images/dice" + dado1 + ".png"
document.querySelector(".img1").setAttribute("src", randomImage1)

//Muda o dado 2
var dado2 = Math.floor(Math.random() *6 +1)
console.log(dado2)
var randomImage2 = "images/dice" + dado2 + ".png"
document.querySelector(".img2").setAttribute("src", randomImage2)

//Verificador do vencedor 
if (dado1 == dado2) {
    document.querySelector("h1").innerText = "Empate"
} else if ( dado1 < dado2) {
    document.querySelector("h1").innerHTML = "Player 2 Venceu &#x1F6A9;"
} else if (dado1 > dado2) {
    document.querySelector("h1").innerHTML = "&#x1F6A9; Player 1 Venceu"
}

}