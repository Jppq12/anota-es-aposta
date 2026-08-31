const times = {
    ath:{
        nometime: 'Athletico-PR',
        notas: `Escanteios pro e contra<br>Escanteio 1°tempo<br>Evitar def goleiro`
    },
    cam:{
        nometime: "Atlético-MG",
        notas: `Defesas goleiro pro(sempre) e contra(obs adversario)<br>Escanteios pro e contra`
    },
    bah:{
        nometime: "Bahia",
        notas: `Escanteios pro e contra<br>`
    },
    bot:{
        nometime: "Botafogo",
        notas: `Defesas do goleiro<br>Escanteios pro e contra`
    },
    cha: {
        nometime: "Chapecoense",
        notas: `Escanteios pro e contra<br>Defesas do goleiro`
    },
    corin:{
        nometime: 'Corinthians',
        notas: `Observar def goleiro <br>Observar escanteios Under`
    },
    corit: {
        nometime: 'Coritiba',
        notas : `Defesa goleiro pro<br>Escanteios geral`
    },
    cru:{
        nometime: 'Cruzeiro',
        notas: `Defesa goleiro pro(sempre) e contra(obs)<br>Escanteios pro e contra<br>Cartões`
    },
    fla: {
        nometime: 'Flamengo',
        notas: `Vitoria simples<br>Não colocar escanteios<br> Defesas goleiro adversario`
    },
    flu: {
        nometime: 'Fluminense',
        notas: `Escanteios pro e contra<br>Defesas goleiro pro e contra`
    },
    gre: {
        nometime: 'Grêmio',
        notas: `Observar defesas de goleiro pro e contra<br>Escanteios pro e contra`
    },
    int : {
        nometime: 'Internacional',
        notas: `Defesa goleiro pro<br>Escanteios pro e contra`
    },
    mir: {
        nometime: 'Mirassol',
        notas: `Defesas goleiro pro<br>Escanteios pro e contra`
    },
    pal: {
        nometime:'Palmeiras',
        notas: `Defesas goleiro pro e contra<br>Observar Escanteios geral<br>`
    },
    rbb: {
        nometime: 'RB Bragantino',
        notas: `Defesas goleiro pro<br>Escanteios geral`
    },
    rem: {
        nometime: 'Remo',
        notas: `Defesas goleiro pro<br>Escanteios cedidos`
    },
    san: {
        nometime: 'Santos',
        notas : `Observar Defesas de goleiro pro e contra<br>Escanteios pro e contra`
    },
    sap: {
        nometime: 'São Paulo',
        notas: `Escanteios pro e contra<br>Defesas goleiro pro e contra`
    },
    vas: {
        nometime: 'Vasco',
        notas: `Defesas goleiro pro e contra<br>Observar escanteios`
    },
    vit: {
        nometime : 'Vitória',
        notas: `Defesa goleiro pro<br>Escanteios cedidos<br>Fraco fora de casa`
    }
}


function mostrarAnot(valor){
    let res = document.getElementById('res')
    let time = times[valor]

    res.innerHTML = `
    <h2>${time.nometime}</h2>
    <p>${time.notas}</p>`
            
}