const times = {
    ath: {
        nometime: 'Athletico-PR',
        notas: `<ul>
                    <li>Escanteios pro e contra</li>
                    <li>Chute a gol Viveiros</li>
                    <li>Defesa goleiro pro e contra</li>
                </ul>`
    },

    cam: {
        nometime: 'Atlético-MG',
        notas: `<ul>
                    <li>Defesas goleiro pro (sempre) e contra (obs adversário)</li>
                    <li>Escanteios pro e contra</li>
                </ul>`
    },

    bah: {
        nometime: 'Bahia',
        notas: `<ul>
                    <li>Escanteios pro e contra</li>
                    <li>Observar Defesa goleiro adversario </li>
                </ul>`
    },

    bot: {
        nometime: 'Botafogo',
        notas: `<ul>
                    <li>Defesas do goleiro pro e contra</li>
                    <li>Escanteios pro e contra</li>
                </ul>`
    },

    cha: {
        nometime: 'Chapecoense',
        notas: `<ul>
                    <li>Escanteios pro e contra</li>
                    <li>Defesas do goleiro pro</li>
                </ul>`
    },

    corin: {
        nometime: 'Corinthians',
        notas: `<ul>
                    <li>Observar def goleiro</li>
                    <li>Observar escanteios </li>
                </ul>`
    },

    corit: {
        nometime: 'Coritiba',
        notas: `<ul>
                    <li>Defesa goleiro pro</li>
                    <li>Escanteios pro e contra</li>
                </ul>`
    },

    cru: {
        nometime: 'Cruzeiro',
        notas: `<ul>
                    <li>Defesa goleiro pro (sempre) e contra (obs)</li>
                    <li>Escanteios pro e contra</li>
                    <li>Cartões</li>
                </ul>`
    },

    fla: {
        nometime: 'Flamengo',
        notas: `<ul>
                    <li>Vitória simples</li>
                    <li>Não colocar escanteios</li>
                    <li>Defesas goleiro (observar pro) e contra</li>
                </ul>`
    },

    flu: {
        nometime: 'Fluminense',
        notas: `<ul>
                    <li>Escanteios pro e contra</li>
                    <li>Defesas goleiro pro e contra</li>
                    <li>Chute a gol Hulk</li>
                </ul>`
    },

    gre: {
        nometime: 'Grêmio',
        notas: `<ul>
                    <li>Observar defesas de goleiro pro e contra</li>
                    <li>Escanteios pro e contra</li>
                </ul>`
    },

    int: {
        nometime: 'Internacional',
        notas: `<ul>
                    <li>Defesa goleiro pro</li>
                    <li>Escanteios pro e contra</li>
                </ul>`
    },

    mir: {
        nometime: 'Mirassol',
        notas: `<ul>
                    <li>Defesas goleiro pro</li>
                    <li>Escanteios pro e contra</li>
                </ul>`
    },

    pal: {
        nometime: 'Palmeiras',
        notas: `<ul>
                    <li>Defesas goleiro pro e contra</li>
                    <li>Observar escanteios geral</li>
                    <li>Observar Flaco p/marcar</li>
                </ul>`
    },

    rbb: {
        nometime: 'RB Bragantino',
        notas: `<ul>
                    <li>Defesas goleiro pro e contra(obs)</li>
                    <li>Escanteios geral</li>
                </ul>`
    },

    rem: {
        nometime: 'Remo',
        notas: `<ul>
                    <li>Defesas goleiro pro</li>
                    <li>Escanteios cedidos</li>
                </ul>`
    },

    san: {
        nometime: 'Santos',
        notas: `<ul>
                    <li>Observar defesas de goleiro pro e contra</li>
                    <li>Escanteios pro(em casa) e contra</li>
                </ul>`
    },

    sap: {
        nometime: 'São Paulo',
        notas: `<ul>
                    <li>Escanteios pro e contra</li>
                    <li>Defesas goleiro pro e contra</li>
                </ul>`
    },

    vas: {
        nometime: 'Vasco',
        notas: `<ul>
                    <li> Observar Defesas goleiro pro e contra</li>
                    <li>Observar escanteios</li>
                </ul>`
    },

    vit: {
        nometime: 'Vitória',
        notas: `<ul>
                    <li>Defesa goleiro pro</li>
                    <li>Escanteios cedidos</li>
                    <li>Fraco fora de casa</li>
                </ul>`
    }
}

let time1 = ''
let time2 = ''
let res = document.getElementById('res')

function mostrarAnot(valor,numero){
    if (numero == 1){
        time1 = valor
    } else{
        time2 = valor
    }

    res.innerHTML = ''

    if (time1 != '') {
    res.innerHTML += `
    <h2>${times[time1].nometime}</h2>
    <p>${times[time1].notas}</p>
    ` 
}
if (time2 != '') {
    res.innerHTML += `
    <br><hr>
    <h2>${times[time2].nometime}</h2>
    <p>${times[time2].notas}</p>`
}
  
}

function limpar() {
    res.innerHTML = '' //limpando caixa de texto

    time1 = ''
    time2 = ''

    document.getElementById('timesbr1').selectedIndex = 0 //Zerando a escolha do time
    document.getElementById('timesbr2').selectedIndex = 0 //Zerando a escolha do time
}