for (var i = 0; i<document.querySelectorAll(".drum").length; i++) { 

//Verificar o BOTÃO que foi apertado
document.querySelectorAll(".drum")[i].addEventListener("click",clicou)



function clicou() {
    
    var buttonInnerHTML = this.innerHTML

    buttonAnimation(buttonInnerHTML)
    makeSound(buttonInnerHTML)

    
    
}
}


//Verificar a TECLA que foi apertada
document.addEventListener("keydown", function (event) { 


    buttonAnimation(event.key)
    makeSound(event.key)

    
});

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;
        
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;

        case "s":
            var tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;

        case "d":
            var kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;

        case "j":
            var tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;

        case "k":
            var tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;

        case "l":
            var snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;

        default:
            console.log(innerHTML)
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey)
        activeButton.classList.add("pressed")

        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100)
}