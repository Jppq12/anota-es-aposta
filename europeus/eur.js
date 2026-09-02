const times = {
    bay:{nometime : 'Bayern',
    notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        real: {
            nometime : 'Real Madrid',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        barca :{
            nometime : 'Barcelona',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        psg:{
            nometime : 'Paris Saint-Germain',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        ars: {
            nometime : 'Arsenal',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        che:{
            nometime : 'Chelsea',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        liv:{
            nometime : 'Liverpool',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        mci:{
            nometime : 'Manchester City',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        mun:{
            nometime : 'Manchester United',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        rom: {
            nometime : 'Roma',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        int: {
            nometime : 'Inter de Milão',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
        },
        mil:{
            nometime : 'Milan',
            notas: `<ul>
            <li> </li>
            <li> </li>
            <li> </li></ul>`
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

function limpar() {
    res.innerHTML = '' //limpando caixa de texto

    time1 = ''

    document.getElementById('timeseur').selectedIndex = 0 //Zerando a escolha do time

}