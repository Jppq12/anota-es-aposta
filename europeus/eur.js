const times = {
        bay:{nometime : 'Bayern',
            notas: `<ul>
            <li>Defesas goleiro adversario</li>
            <li>Chute a Gol Olise </li>
            <li>Escanteios pro </li>
            <li>Handicap -1</li>
            </ul>`
        },
        bor:{nometime: 'Borussia Dortmund',
            notas:`<ul>
            <li>Defesas goleiro adversario</li>
            <li>Mais escanteios no jogo</li>
            </ul>`
        },
        real: {
            nometime : 'Real Madrid',
            notas: `<ul>
            <li>Chute a gol Mbape</li>
            <li>Defesa goleiro pro(obs) e adversario</li>
            <li>Escanteios pro </li>
            <li>Handicap -1</li>
            </ul>`
        },
        barca :{
            nometime : 'Barcelona',
            notas: `<ul>
            <li>Chute a gol Raphinha e Yamal</li>
            <li>Defesa goleiro adversario </li>
            <li>Escanteios </li>
            <li>Handicap -1</li>
            </ul>`
        },
        psg:{
            nometime : 'Paris Saint-Germain',
            notas: `<ul>
            <li>Observar chutes a gol</li>
            <li>Defesa goleiro adversario </li>
            <li>Escanteios pro </li></ul>`
        },
        ars: {
            nometime : 'Arsenal',
            notas: `<ul>
            <li>Observar Under gols </li>
            <li>Escanteios pro(contra adversario inferior) </li>
            <li>Observar ambas não marcam ou Resultado correto(1-0/ 2-0/ 3-0) </li>
            </ul>`
        },
        che:{
            nometime : 'Chelsea',
            notas: `<ul>
            <li>Chute a gol Palmer e João Pedro </li>
            <li>Over gols </li>
            <li>Escanteios geral </li>
            <li>Defesa goleiro pro e adversario </li></ul>`
        },
        liv:{
            nometime : 'Liverpool',
            notas: `<ul>
            <li>Chute a gol Isak</li>
            <li>Observar escanteios</li>
            <li>Observar defesas goleiro pro e contra</li></ul>`
        },
        mci:{
            nometime : 'Manchester City',
            notas: `<ul>
            <li>Chute a gol Haaland</li>
            <li>Escanteios pro</li>
            <li>Defesa goleiro adversario</li></ul>`
        },
        mun:{
            nometime : 'Manchester United',
            notas: `<ul>
            <li>Escanteios pro</li>
            <li>Defesa de goleiro adversario</li>
            <li>Observar chute a gol Bruno. F e Matheus. C </li></ul>`
        },
        int: {
            nometime : 'Inter de Milão',
            notas: `<ul>
            <li>Observar chute a gol Barrela,Dimarco </li>
            <li>Vitoria simples,Observar Handicap </li>
            <li>Observar Defesa goleiro adversario </li></ul>`
        },
        juv: {
            nometime:'Juventus',
            notas: `<ul>
            <li>Escanteios pro </li>
            <li>Defesa goleiro adversario </li></ul>`
        },
        mil:{
            nometime : 'Milan',
            notas: `<ul>
            <li>Observar chute a gol Gonçalo Ramos</li>
            <li>Under escanteios </li>
            <li>Defesa goleiro adversario </li></ul>`
        },
        rom: {
            nometime : 'Roma',
            notas: `<ul>
            <li>Chute a gol Malen,Marcar</li>
            <li>Vitoria/handicap</li>
            <li>Under escanteios</li>
            <li>Defesa goleiro adversario</li></ul>`
        }
}
let time1 = ''
let res = document.getElementById('res')

function mostrarAnot(valor){
    time1 = valor
    res.innerHTML = ''

    if (time1 != '') {
    res.innerHTML += `
    <h2>${times[time1].nometime}</h2>
    <p>${times[time1].notas}</p>
    ` 
        
}
}

function corfundo(select) {
            let opcao = select.options[select.selectedIndex]
            let grupo = opcao.parentElement
            let nome = res.querySelector('h2')
            
            switch (grupo.label) {
                case 'Alemanha':
                    nome.style.background = 'linear-gradient(to bottom,black,red,yellow'
                    nome.style.color = 'white'
                    break

                case 'Espanha':
                    nome.style.background = 'linear-gradient(to right,red,yellow,red'
                    nome.style.color = 'white'
                    break

                case 'França':
                    nome.style.background = 'linear-gradient(to right,#000091,#ffffff,#e1000f'
                    nome.style.color = 'white'
                    break
                
                case 'Inglaterra':
                    nome.style.background = 'linear-gradient(to right,white,#cf142b,white'
                    nome.style.color = 'white'
                    break

                case 'Itália':
                    nome.style.background = 'linear-gradient(to right,#008c45,#f4f5f0,#cd212a'
                    nome.style.color = 'white'
                    break
        }
    
    }
function limpar() {
    res.innerHTML = '' //limpando caixa de texto

    time1 = ''

    document.getElementById('timeseur').selectedIndex = 0 //Zerando a escolha do time

}