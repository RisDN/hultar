const adat = localStorage.getItem('hultar-lista')
const tablazat = document.getElementById('tablazat')

if(adat == null) {
    let uresAdat = []
    console.log('Első belépés! Adat tároló elkészítése!')
    localStorage.setItem('hultar-lista', JSON.stringify(uresAdat));
}

if(adat == '[]') {
    console.log('Üres adatok!')
}
if(adat != '[]') {
    if(adat != null) {}
    mentettAdatBetoltese()
}

function mentettAdatBetoltese() {
    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-lista"));
    if (mentett_targyak) {
        mentett_targyak.forEach((mentettek) => {
            mentettLetrehozas(mentettek.id, mentettek.szoveg, mentettek.mertekegyseg, mentettek.darabszam, mentettek.keszenvane)
        });
    }
}

function mentettLetrehozas(id, targy, mertekegyseg, darabszam, keszenvane) {
    let uj_targy = document.createElement('tr')
    uj_targy.innerHTML = 
        `
        <th class="pipa"><input id="${id}" onclick="keszenVanE(this.id, this.checked)" type="checkbox"></th>
        <th class="valaszto">|</th>
        <th id="${id}-stilus" class="${keszenvane}">${targy}</th>
        <th class="valaszto">|</th>
        <th id="${id}-stilus" class="darabszam ${keszenvane}">${darabszam} ${mertekegyseg}</th>
        `
        document.querySelector('table').appendChild(uj_targy)
        document.getElementById(id).checked = keszenvane
}



function hozzaAdas(targy, darabszam, mertekegyseg) {
    let mentettek = JSON.parse(localStorage.getItem('hultar-lista'))
    let id = new Date().getTime()
    mentettek.push({
        id: id,
        szoveg: targy,
        keszenvane: false,
        darabszam: darabszam,
        mertekegyseg: mertekegyseg,
    })
    localStorage.setItem('hultar-lista', JSON.stringify(mentettek));
    let ujelem = document.createElement('tr')
    ujelem.innerHTML = 
    `
    <th class="pipa"><input id="${id}" onclick="keszenVanE(this.id, this.checked)" type="checkbox"></th>
    <th class="valaszto">|</th>
    <th id="${id}-stilus" class="false">${targy}</th>
    <th class="valaszto">|</th>
    <th id="${id}-stilus" class="darabszam false">${darabszam} ${mertekegyseg}</th>
    `
    document.querySelector('table').appendChild(ujelem)
}

