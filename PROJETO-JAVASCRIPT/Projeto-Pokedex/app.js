let url = "https://pokeapi.co/api/v2/pokemon/"
let pokemonID = $(".pokemon_id").html()
let id = parseInt(pokemonID)
const form = document.querySelector('.form')



// Uso da API
const fetchPokemon = async (pokemon) => {
    
    const APIResponse = await fetch(url+pokemon)
    if (APIResponse.status == 200) {
        const data = await APIResponse.json()
        return data 
    }
    
}

const renderPokemon = async (pokemon) => {
    $("#pokemon_gif").attr("src", "#")
    $("#pokemon_gif").css("display", "none")
    $(".pokemon_id").text("")
    $(".hf").html("")

    $(".pokemon_name").html("Carregando...")

    const data = await fetchPokemon(pokemon)

    setTimeout(function () { 
        
        if (data) {
        $(".pokemon_id").html(data.id)
        id = data.id
        $(".hf").html("-")
        $(".pokemon_name").html(data.name)
        $("#pokemon_gif").attr("src", data.sprites.versions['generation-v']['black-white'].animated['front_default'])
        } else {
            $(".pokemon_name").html("Notfound")
            $(".pokemon_id").html("")
            $(".hf").html("")
        }
        $("#pokemon_gif").css("display", "block")

    }, 500)
}
renderPokemon(id)






// Formulário
form.addEventListener('submit', (evt) =>{

    evt.preventDefault()
    
    renderPokemon($(".pokemon_search").val().toLowerCase())

})


//Botões

$("#prox").on("click", function () {
   
    id++
    renderPokemon(id)

})
$("#prev").on("click", function () {

    id--
    renderPokemon(id)
    if (id == 0) {
        id++
    }
})