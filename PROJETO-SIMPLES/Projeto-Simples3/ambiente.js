var rf = 12
var ri = 4
var rp = 0

var soma = (rf - ri) / rp

        if (rp = Number(0)) {
            console.log('Coloque um valor na caixa')
        } else { 
        for (ri ;ri < rf; ri = ri + soma){
            console.log( `O valor está em ${ri}`)
        }
        console.log(`Terminou em ${ri}`)
    }