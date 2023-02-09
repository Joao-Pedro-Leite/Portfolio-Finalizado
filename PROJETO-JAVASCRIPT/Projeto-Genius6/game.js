//Variáveis importantes pro projeto
var gamePattern = []
var userClickPattern = []
var color = ["green","red","yellow","blue"]
var ideiaChristian = true
var level = 0

//Início do jogo
$(document).on("keydown", function gameStart() {

    ideiaChristian = !ideiaChristian

    if (!ideiaChristian) {
        level = 0
        $("h1").text("level "+level)
        nextSequence()
        
    } else {
        derrota()
        som("wrong")
        $("h1").text("Fim de jogo, aperte uma tecla para recomeçar")
        gamePattern = []
        

    }

})



//Ação do jogo 
function nextSequence() {
    $("h1").text("level "+level)
    level++

    userClickPattern = []
    var randomNumber = Math.floor(Math.random()*4)
    var randomChosenColor = color[randomNumber]
    gamePattern.push(randomChosenColor)
    
    pressionado(randomChosenColor)
    som(randomChosenColor)
}



//Ação do player
$(".btn").on("click", function () {

    if(!ideiaChristian) { 
    var btnclick = $(this).attr("id")
    userClickPattern.push(btnclick)
    checkAnswer(userClickPattern.length-1)

    pressionado(btnclick)
    som(btnclick)
    }
})



//Check da resposta
function checkAnswer(x) {

    if (gamePattern[x] === userClickPattern[x]) {
        console.log("acertou")
        if (gamePattern.length === userClickPattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000)
        }
    } else {
        derrota()
        som("wrong")
        $("h1").text("Fim de jogo, aperte uma tecla para recomeçar")
        gamePattern = []
        ideiaChristian = !ideiaChristian
    }
}



//Animação do botão 
function pressionado(cordobotao) {

    $("#"+cordobotao).addClass("pressed")
    setTimeout(function (){
    $("#"+cordobotao).removeClass("pressed")
    }, 100)
}



//Animação de derrota
function derrota() {
    $("body").addClass("game-over")
    setTimeout(function (){
        $("body").removeClass("game-over")
        }, 500)
}



//Som dos botões
function som(cordobotao) {
    var audio = new Audio("sounds/"+cordobotao+".mp3")
    audio.play()
}