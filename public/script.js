
const adat = localStorage.getItem('hultar-adat')
const ikonok = [
    'Tej',
    'Vaj',
    'Sonka',
    'Kifli',
    'Kenyer',
]
const ikonWidth = 28
const ikonHeight = 28

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

    if(vanIkon(nev)) {
        uj_targy.innerHTML = 
        `
        <th id="${menny}"><img width="${ikonWidth}" class="targy-ikon" heigth="${ikonHeight}" src="kepek/${nev}.png"> ${nev}</th>
        <th class="targy-mertekegyseg" id="${mertek}">${menny} ${mertek}</th>
        <th>${lejar}</th>
        <th class="interakcio">
            <button class="minuszegy-gomb interakcio-gomb" id="${nev}-minuszegy">-</button>
            <button class="plusszegy-gomb interakcio-gomb" id="${nev}-plusszegy">+</button>
            <i class="fas torles-ikon fa-times" id="${nev}-torles"></i>
        </th>
        `
        document.querySelector('tbody').appendChild(uj_targy)
    } else {
        uj_targy.innerHTML = 
        `
        <th id="${menny}"><img width="${ikonWidth}" class="targy-ikon" heigth="${ikonHeight}" src="kepek/kerdojel.png"> ${nev}</th>
        <th class="targy-mertekegyseg" id="${mertek}">${menny} ${mertek}</th>
        <th>${lejar}</th>
        <th class="interakcio">
            <button class="minuszegy-gomb interakcio-gomb" id="${nev}-minuszegy">-</button>
            <button class="plusszegy-gomb interakcio-gomb" id="${nev}-plusszegy">+</button>
            <i class="fas torles-ikon fa-times" id="${nev}-torles"></i>
        </th>
        `
        document.querySelector('tbody').appendChild(uj_targy)
    }
}


function vanIkon(nev) {
    return ikonok.includes(nev)
}

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


function nagyBetu(szo) {
    return szo.charAt(0).toUpperCase() + szo.slice(1);
}