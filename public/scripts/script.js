
const adat = localStorage.getItem('hultar-adat')

function mentettAdatBetoltese() {
    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-adat"));
    if (mentett_targyak) {
        mentett_targyak.forEach((mentettek) => {
            mentettLetrehozas(mentettek.nev, mentettek.mennyiseg, mentettek.mertekegyseg, mentettek.lejarat, mentettek.id);
        });
    }
}

function mentettLetrehozas(nev, menny, mertek, lejar, id) {
    let uj_targy = document.createElement('tr')
    nev = nagyBetu(nev)
    uj_targy.id = id
    uj_targy.className = "targy"

    if(vanIkon(nev)) {
        uj_targy.innerHTML = 
        `
        <td id="${menny}"><img width="${ikonWidth}" class="targy-ikon" heigth="${ikonHeight}" src="kepek/${nev}.png"> ${nev}</td>
        <td class="targy-mertekegyseg" id="${mertek}">${menny} ${mertek}</td>
        <td>${lejar}</td>
        <td class="interakcio">
        <button class="minuszegy-gomb interakcio-gomb" onclick="darabSzamAllitas(${id}, 'le')">-</button>
        <button class="plusszegy-gomb interakcio-gomb" onclick="darabSzamAllitas(${id}, 'fel')">+</button>
            <i class="fas torles-ikon fa-times" onclick="veglegesTorles(${id})"></i>
        </td>
        `
        document.querySelector('tbody').appendChild(uj_targy)
    } else {
        uj_targy.innerHTML = 
        `
        <td id="${menny}"><img width="${ikonWidth}" class="targy-ikon" heigth="${ikonHeight}" src="kepek/kerdojel.png"> ${nev}</td>
        <td class="targy-mertekegyseg" id="${mertek}">${menny} ${mertek}</td>
        <td>${lejar}</td>
        <td class="interakcio">
        <button class="minuszegy-gomb interakcio-gomb" onclick="darabSzamAllitas(${id}, 'le')">-</button>
        <button class="plusszegy-gomb interakcio-gomb" onclick="darabSzamAllitas(${id}, 'fel')">+</button>
            <i class="fas torles-ikon fa-times" onclick="veglegesTorles(${id})"></i>
        </td>
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