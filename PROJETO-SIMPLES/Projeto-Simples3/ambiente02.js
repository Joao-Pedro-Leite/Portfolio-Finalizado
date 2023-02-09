function calcular() {

var numero1 = document.getElementById('numero1')
valor1 = Number(numero1.value)

var numero2 = document.getElementById('numero2')
valor2 = Number(numero2.value)


var select = document.getElementById('seltab')

if (numero1.value.length == 0 || numero2.value.length == 0 || numero1.value < 0 || numero2.value < 0) {

    window.alert('Por favor insira um valor válido na caixa!')
} else {
        var v2 = 1
        select.innerHTML = ''
        
        for (var tab = valor1; tab <= valor1 * valor2; v2++,   tab = valor1 * v2 ) {




            var item = document.createElement('option')
            select.appendChild(item)

            item.text += ` ${valor1} x ${v2} = ${tab} `

            
        }

            
    }
}