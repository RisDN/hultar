const adat = localStorage.getItem('hultar-lista')
const tablazat = document.getElementById('tablazat')

if(adat == null) {
    let uresAdat = []
    console.log('Első belépés! Adat tároló elkészítése!')
    localStorage.setItem('hultar-lista', JSON.stringify(uresAdat));
}

if(adat == '[]') {
    console.log('Üres adatok!' + '\nNincs mit beilleszteni!')
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
    uj_targy.id = `targy-${id}`
    if(vanIkon(targy)) {
        uj_targy.innerHTML = 
        `
            <td class="pipa"><input id="${id}" onclick="keszenVanE(this.id, this.checked)" type="checkbox"></td>
            <td id="targy-${id}-stilus" class="${keszenvane}"><img width="25" class="targy-ikon" heigth="25" src="kepek/${targy}.png"> ${targy}</td>
            <td id="targy-${id}-stilus" class="darabszam ${keszenvane}">${darabszam} ${mertekegyseg}</td>
            <td class="vegleg-torles" onclick="veglegesTorles(${id})">&times;</td>
        `
        document.querySelector('tbody').appendChild(uj_targy)
    } else {
        uj_targy.innerHTML = 
        `
            <td class="pipa"><input id="${id}" onclick="keszenVanE(this.id, this.checked)" type="checkbox"></td>
            <td id="targy-${id}-stilus" class="${keszenvane}"><img width="25" class="targy-ikon" heigth="25" src="kepek/kerdojel.png"> ${targy}</td>
            <td id="targy-${id}-stilus" class="darabszam ${keszenvane}">${darabszam} ${mertekegyseg}</td>
            <td class="vegleg-torles" onclick="veglegesTorles(${id})">&times;</td>
        `
        document.querySelector('tbody').appendChild(uj_targy)
    }
        document.getElementById(id).checked = keszenvane
}



function hozzaAdas(targy, darabszam, mertekegyseg) {
    let mentettek = JSON.parse(localStorage.getItem('hultar-lista'))
    let id = new Date().getTime()
    targy = nagyBetu(targy)
    mentettek.push({
        id: id,
        szoveg: targy,
        keszenvane: false,
        darabszam: darabszam,
        mertekegyseg: mertekegyseg,
    })
    localStorage.setItem('hultar-lista', JSON.stringify(mentettek));
    let ujelem = document.createElement('tr')
    ujelem.id = `targy-${id}`
    if(vanIkon(targy)) {
        ujelem.innerHTML = 
        `
            <td class="pipa"><input id="${id}" onclick="keszenVanE(this.id, this.checked)" type="checkbox"></td>
            <td id="targy-${id}-stilus" class="false"><img width="25" class="targy-ikon" heigth="25" src="kepek/${targy}.png"> ${targy}</td>
            <td id="targy-${id}-stilus" class="darabszam false">${darabszam} ${mertekegyseg}</td>
            <td class="vegleg-torles" onclick="veglegesTorles(${id})">&times;</td>
        `
    } else {
        ujelem.innerHTML = 
        `
            <td class="pipa"><input id="${id}" onclick="keszenVanE(this.id, this.checked)" type="checkbox"></td>
            <td id="targy-${id}-stilus" class="false"><img width="25" class="targy-ikon" heigth="25" src="kepek/kerdojel.png"> ${targy}</td>
            <td id="targy-${id}-stilus" class="darabszam false">${darabszam} ${mertekegyseg}</td>
            <td class="vegleg-torles" onclick="veglegesTorles(${id})">&times;</td>
        `
    }

    document.querySelector('tbody').appendChild(ujelem)
}


function vanIkon(nev) {
    return ikonok.includes(nev)
}
function nagyBetu(szo) {
    return szo.charAt(0).toUpperCase() + szo.slice(1);
}