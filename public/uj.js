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
    nev = nagyBetu(nev)
    uj_targy.className = "targy"
    uj_targy.innerHTML = 
        `
        <th id="${menny}">${nev}</th>
        <th id="${mertek}">${menny} ${mertek}</th>
        <th>${lejar}</th>
        <th class="interakcio">
            <button class="plusszegy-gomb interakcio-gomb" id="${nev}-plusszegy">+</button>
            <button class="minuszegy-gomb interakcio-gomb" id="${nev}-minuszegy">-</button>
            <i class="fas torles-ikon fa-times" id="${nev}-torles"></i>
        </th>
        `
    tablazat.appendChild(uj_targy)
    $('#myModal').modal('hide')
    ujAlaphelyzetbe()
    adatTarolasFrissitese()
}


function adatTarolasFrissitese() {
    const targyak = document.querySelectorAll('.targy');
    const osszes_mappa = [];
    targyak.forEach((elem) => {
        console.log(elem)
        osszes_mappa.push({
            nev: elem.querySelectorAll('th')[0].innerHTML,
            mennyiseg: elem.querySelectorAll('th')[0].id,
            mertekegyseg: elem.querySelectorAll('th')[1].id,
            lejarat: elem.querySelectorAll('th')[2].innerHTML
        });
    });
    //console.log(osszes_mappa)
    localStorage.setItem('hultar-adat', JSON.stringify(osszes_mappa));
}
