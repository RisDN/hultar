let ujnevbeirasEl = document.getElementById('uj-nev-beiras')
let ujmennyisegbeirasEl = document.getElementById('uj-mennyiseg-beiras')
let ujlejaratidatumEl = document.getElementById('uj-lejaratidatum-beiras')
let ujmertekegysegEl = document.getElementById('uj-mertekegyseg')

function ujHozzadas() {
    if(ujlejaratidatumEl.value != '') {
            hozzaAdas(ujnevbeirasEl.value, ujmennyisegbeirasEl.value, ujmertekegysegEl.value, ujlejaratidatumEl.value)
    }else{
        alert('Kérlek írj be egy lejárati dátumot!')
    }
}

//<th class="targy-nev"><span class="hanyadik">${hanyadik}</span>
const tablazat = document.querySelector('table')
function hozzaAdas(nev, menny, mertek, lejar) {
    let uj_targy = document.createElement('tr')
    uj_targy.className = "targy"
    nev = nagyBetu(nev)
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
        document.querySelector('table').appendChild(uj_targy)
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
    $('#myModal').modal('hide')
    ujAlaphelyzetbe()
    adatTarolasFrissitese()
}


function adatTarolasFrissitese() {
    const targyak = document.querySelectorAll('.targy');
    const osszes_targy = [];
    targyak.forEach((elem) => {
        console.log(elem)
        osszes_targy.push({
            nev: elem.querySelectorAll('th')[0].innerText,
            mennyiseg: elem.querySelectorAll('th')[0].id,
            mertekegyseg: elem.querySelectorAll('th')[1].id,
            lejarat: elem.querySelectorAll('th')[2].innerText
        });
    });
    //console.log(osszes_targy)
    localStorage.setItem('hultar-adat', JSON.stringify(osszes_targy));
}
