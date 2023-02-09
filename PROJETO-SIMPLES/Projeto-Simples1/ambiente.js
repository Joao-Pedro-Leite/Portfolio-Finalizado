// Definindo as variaveis

var num = document.getElementById('txt1')
var lista = document.getElementById('txt2')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    } else {
        return false
    }
}

function Adicionar(){
    // Verifica se o valor existe na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {


        valores.push(Number(num.value))

        var item = document.createElement('option')
        lista.appendChild(item)
        item.text = `O valor escolido foi o ${num.value}`

    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function Verificar() {
    res.innerHTML = ''
    valores.sort()
    var qnum = valores.length - 1
    var soma = 0
    
    for (var pos=0; pos < valores.length; pos++) {

        var soma = Number(soma + valores[pos]) 
    }

    var divisa = soma / valores.length

    res.innerHTML += `Ao todo temos ${valores.length} números selecionados <br>`
    res.innerHTML += `O maior valor é o ${valores[qnum]} <br>`
    res.innerHTML += `Somando todos os valores temos ${soma} <br>`
    res.innerHTML += `A média dos valores é ${divisa}`
}