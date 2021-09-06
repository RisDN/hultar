

let hanyadik = 0
/*
function behelyezes() {
    console.log('Talált adat! ' + JSON.stringify(localStorage.getItem('hultar-adat'))    + '\nBetöltés')
    for(let i = 0; i < adat.length; i++) {
        hanyadik++
        let uj_targy = document.createElement('tr')
        uj_targy.className('targy')
        uj_targy.innerHTML = 
            `
            
            <th class="targy-nev"><span class="hanyadik">${hanyadik}</span> |  ${adat[i].nev} x ${adat[i].mennyiseg}</th>
            <th>${adat[i].lejarat} nap</th>
            <th class="interakcio">
                <button class="plusszegy-gomb interakcio-gomb" id="${adat[i].nev}-plusszegy">+</button>
                <button class="minuszegy-gomb interakcio-gomb" id="${adat[i].nev}-minuszegy">-</button>
                <i class="fas torles-ikon fa-times" id="${adat[i].nev}-torles"></i>
            </th>
            `
        tablazat.appendChild(uj_targy)
    }
}*/


const adat = localStorage.getItem('hultar-adat')
//console.log(adat)
if(adat == null) {
    let uresAdat = []
    console.log('Első belépés! Adat tároló elkészítése!')
    localStorage.setItem('hultar-adat', JSON.stringify(uresAdat));
}

if(adat == '[]') {
    console.log('Üres adatok!')
}
if(adat != '[]') {
    if(adat != null) {}
    mentettAdatBetoltese()
}


function mentettAdatBetoltese() {
    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-adat"));
    if (mentett_targyak) {
        mentett_targyak.forEach((mentettek) => {
            mentettLetrehozas(mentettek.nev, mentettek.mennyiseg, mentettek.mertekegyseg, mentettek.lejarat, );
        });
    }
}

function mentettLetrehozas(nev, menny, mertek, lejar) {
    let uj_targy = document.createElement('tr')
    nev = nagyBetu(nev)
    uj_targy.className = "targy"
    uj_targy.innerHTML = 
        `
        <th id="${menny}">${nev}</th>
        <th id="${mertek}">${menny} ${mertek}</th>
        <th>${lejar}</th>
        <th class="interakcio">
            <button class="minuszegy-gomb interakcio-gomb" id="${nev}-minuszegy">-</button>
            <button class="plusszegy-gomb interakcio-gomb" id="${nev}-plusszegy">+</button>
            <i class="fas torles-ikon fa-times" id="${nev}-torles"></i>
        </th>
        `
        document.querySelector('table').appendChild(uj_targy)
}


function nagyBetu(szo) {
    return szo.charAt(0).toUpperCase() + szo.slice(1);
}
