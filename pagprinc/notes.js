let ifr = document.getElementById('mostranotas')
let sombra = document.getElementById('tela')

function brasileiros() {
    ifr.src = '../brasileiros/br.html'

    
    sombra.style.boxShadow = '2px 2px 8px #009c3b,-2px -2px 8px #ffdf00'
    
}

function europeus(){
    ifr.src = '../europeus/eur.html'

    sombra.style.boxShadow = '2px 2px 8px #003399,-2px -2px 8px #fcfbf9'

}