let ifr = document.getElementById('mostranotas')
let sombra = document.getElementById('tela')

function brasileiros() {
    ifr.src = '../brasileiros/br.html'

    
    sombra.style.boxShadow = '3px 3px 18px #009c3b,-3px -3px 18px #ffdf00'
    
}

function europeus(){
    ifr.src = '../europeus/eur.html'

    sombra.style.boxShadow = '3px 3px 18px #003399,-3px -3px 18px #fcfbf9'

}