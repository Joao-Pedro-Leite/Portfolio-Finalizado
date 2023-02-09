
//Perguntas do quiz
const quiz = [
    {   pergunta: "Quem foi a primeira pessoa a viajar ao espaço ?",
    a: "Yuri Gagarin",
    b: "A cadela Laika",
    c: "Neil Armstrong",
    d: "Marcos Pontes",
    correta: "a"
    },{   pergunta: "Qual a montanha mais alta do mundo ?",
    a: "Mauna Kea",
    b: "Dhaulagiri",
    c: "Monte Chimborazo",
    d: "Monte Everest",
    correta: "d"
    },{   pergunta: "Onde se localiza Machu Picchu ?",
    a: "Colômbia",
    b: "Peru",
    c: "China",
    d: "Bolívia",
    correta: "b"
    },{   pergunta: "Qual país tem o formato de uma bota ?",
    a: "Butão",
    b: "Brasil",
    c: "Portugal",
    d: "Itália",
    correta: "d"
    },{   pergunta: "Quem inventou a lâmapada ?",
    a: "Graham Bell",
    b: "Steve Jobs",
    c: "Thomas Edison",
    d: "Henry Ford",
    correta: "c"
    },{   pergunta: "Quanto tempo demora para a terra dar um giro em torno dela mesm ?",
    a: "Aproximadamente 24 horas ?",
    b: "365 dias",
    c: "7",
    d: "365 ou 366 dias",
    correta: "a"
    },{   pergunta: "A que temperatura a água ferve ?",
    a: "200°C",
    b: "-10°C",
    c: "180°C",
    d: "100°C",
    correta: "d"
    },{   pergunta: "Quais são as fases da Lua ?",
    a: "Nova, Cheia e superlua",
    b: "Penumbra, lunar parcial, lunar total e cheia",
    c: "Nova, cheia, minguante e lua de sangue",
    d: "Nova, crescente, cheia e minguante",
    correta: "d"
    },{   pergunta: "Quantos ossos temos no nosso corpo ?",
    a: "126",
    b: "206",
    c: "18",
    d: "300",
    correta: "b"
    },{   pergunta: "Qual o maior planeta do sitema solar ?",
    a: "Marte",
    b: "Júpiter",
    c: "Terra",
    d: "Saturno",
    correta: "b"
    },
    {   pergunta: "Quem foi o vencedor do Game of the year(GOTY) do The Game Awards 2013 ?",
    a: "Super Mario 3D World",
    b: "Bioshock Infinite",
    c: "GTA V",
    d: "The Last of Us",
    correta: "c"
    }
]


//Variavéis do projeto
let acertos = []
let i = 0
let comeco = false


//Botões para começar o jogo
$(document).on("keypress", function () {
    if (comeco == false) {
        questionario()
        comeco = true
        $(".form-check").css("display", "block")
        $("button").text("próximo")
   
    }
     
})

$("button").on("click", function Jogo() {
    
    if ($("input:radio[name=s]:checked")[0].checked = true
    ) { 
        if (comeco == true) {
                perguntas()            
        } 
    } 
       
})



//Funções para para o funcionamento das perguntas

function perguntas() {
    

     if ($("input:radio:checked").val() == quiz[i].correta) { 
        i++
        acertos.push(".")
        $("input:radio[name=s]:checked")[0].checked = false
        questionario()
    } else {
        i++
        $("input:radio[name=s]:checked")[0].checked = false
        questionario()
        
   }
}

function questionario() {

     if (i == 10 ) {
        $("#titulo").html("O seu número de acertos foi:"+ acertos.length+"/10")
        $(".form-check").css("display", "none") 
        parabens()
        $("button").text("Obrigado por jogar !")
    } else {  
    $("#titulo").text("Level "+ i)
    $("#questao").html("<h2>"+quiz[i].pergunta+"</h2>")
    $("#perg1").text(quiz[i].a)
    $("#perg2").text(quiz[i].b)
    $("#perg3").text(quiz[i].c)
    $("#perg4").text(quiz[i].d)
    }
}

function parabens() {
    if (acertos.length == 10) {
        $("#questao").html("<h2>UAU, 10/10, acho que descobrimos o novo einstein</h2>")
    } else if ( acertos.length == 0) {
        $("#questao").html("<h2>Osh, 0 ?, ta de brincadeira com a minha cara ?</h2>")
    } else if (acertos.length < 3) {
        $("#questao").html("<h2>"+acertos.length+"/10 ? é realmente não ta fácil pra ninguém</h2>")
    } else if( acertos.length < 6) {
        $("#questao").html("<h2>Talvez seja bom estudar um pouco mais, mas não se abata, sempre tem uma próxima vez</h2>")
    } else if (acertos.length < 10) {
        $("#questao").html("<h2>Caramba, mais da metade, ta com o saldo positivo</h2>")
    }
}