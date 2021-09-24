let ujnevbeirasEl = document.getElementById('uj-nev-beiras')
let ujmennyisegbeirasEl = document.getElementById('uj-mennyiseg-beiras')
let ujlejaratidatumEl = document.getElementById('uj-lejaratidatum-beiras')
let ujmertekegysegEl = document.getElementById('uj-mertekegyseg')

function ujHozzadas() {
    if (ujlejaratidatumEl.value != '') {
            hozzaAdas(ujnevbeirasEl.value, ujmennyisegbeirasEl.value, ujmertekegysegEl.value, ujlejaratidatumEl.value)
    } else {
        hiba('Kérlek írj be egy lejárati dátumot!')
    }
}

//<th class="targy-nev"><span class="hanyadik">${hanyadik}</span>
const tablazat = document.querySelector('table')
function hozzaAdas(nev, menny, mertek, lejar) {
    let uj_targy = document.createElement('tr')
    let id = new Date().getTime()
    uj_targy.className = "targy"
    uj_targy.id = id

    let d1 = new Date(lejar)
    let d2 = new(Date)
    let kulonbseg = d2.getTime() - d1.getTime()
    var kulonbsegNapban = kulonbseg / (1000 * 60 * 60 * 24);
    let lejaratVeszely = lejaratiVeszelySzamlalo(parseInt(kulonbsegNapban))

    nev = nagyBetu(nev)
    if(vanIkon(nev)) {
        uj_targy.innerHTML = 
        `
        <td class="targy-neve" id="${menny}"><img width="${ikonWidth}" class="targy-ikon" heigth="${ikonHeight}" src="kepek/${nev}.png"> ${nev}</td>
        <td class="targy-mertekegyseg" id="${mertek}">${menny} ${mertek}</td>
        <td class="lejaratiszint-${lejaratVeszely}">${lejar}</td>
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
        <td class="targy-neve" id="${menny}"><img width="${ikonWidth}" class="targy-ikon" heigth="${ikonHeight}" src="kepek/kerdojel.png"> ${nev}</td>
        <td class="targy-mertekegyseg" id="${mertek}">${menny} ${mertek}</td>
        <td class="lejaratiszint-${lejaratVeszely}">${lejar}</td>
        <td class="interakcio">
        <button class="minuszegy-gomb interakcio-gomb" onclick="darabSzamAllitas(${id}, 'le')">-</button>
        <button class="plusszegy-gomb interakcio-gomb" onclick="darabSzamAllitas(${id}, 'fel')">+</button>
            <i class="fas torles-ikon fa-times" onclick="veglegesTorles(${id})"></i>
        </td>
        `
        document.querySelector('tbody').appendChild(uj_targy)
    }
    $('#myModal').modal('hide')
    ujAlaphelyzetbe()
    adatTarolasFrissitese()
}

function lejaratiVeszelySzamlalo(kulonbseg) {
    if(kulonbseg > 0) { return 0 }
    if(kulonbseg == 0) { return 1 }
    if(kulonbseg >= -3) { return 2 }
    if(kulonbseg >= -6) { return 3 }
    if(kulonbseg >= -10) { return 4 }
    if(kulonbseg >= -15) { return 5 }
    if(kulonbseg < -30) { return 6 }
}

function adatTarolasFrissitese() {
    const targyak = document.querySelectorAll('.targy');
    const osszes_targy = [];
    targyak.forEach((elem) => {
        console.log(elem)
        osszes_targy.push({
            nev: elem.querySelectorAll('td')[0].innerText,
            mennyiseg: elem.querySelectorAll('td')[0].id,
            mertekegyseg: elem.querySelectorAll('td')[1].id,
            lejarat: elem.querySelectorAll('td')[2].innerText,
            id: elem.id
        });
    });
    //console.log(osszes_targy)
    localStorage.setItem('hultar-adat', JSON.stringify(osszes_targy));
}
