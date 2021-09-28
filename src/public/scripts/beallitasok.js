

const beallitasokIkonok = document.querySelector('.elerheto-ikonok')
const ikonokLenyitasaGomb = document.querySelector('#ikonok-lenyitas')

ikonok.forEach((ikon) => {
    let ujIkon = document.createElement('div')
    ujIkon.className = 'ikonok'
    ujIkon.innerHTML = `<img width="28" height="28" src="kepek/${ikon}.png">  <h6>${ikon}</h6>`
    beallitasokIkonok.appendChild(ujIkon)
})


ikonokLenyitasaGomb.addEventListener('click', () => {
    if(beallitasokIkonok.className == 'lenyitva') {
        beallitasokIkonok.className = 'csukva'
    } else {
        beallitasokIkonok.className = 'lenyitva'
    }
})


const adatTorlesGomb = document.querySelector('#adat-torles-gomb')
const adatTorlesGombBe = document.querySelector('#adat-torles-gomb-bevasarlo')
const adatTorlesGombLel = document.querySelector('#adat-torles-gomb-leltar')


adatTorlesGomb.addEventListener('click', () => {
    localStorage.removeItem('hultar-adat')
    localStorage.removeItem('hultar-lista') 
    window.location.reload()
})


adatTorlesGombBe.addEventListener('click', () => {
    localStorage.removeItem('hultar-lista')  
    window.location.reload()
})

adatTorlesGombLel.addEventListener('click', () => {
    localStorage.removeItem('hultar-adat')
    window.location.reload()
})


const adat = localStorage.getItem('hangok')
const hang_beallitas = document.getElementById('hang-allitas')

if(adat == null) {
    localStorage.setItem('hangok', 'bekapcsolva');
} else {
    hang_beallitas.value = localStorage.getItem('hangok')
}

hang_beallitas.addEventListener('change', () => {
    localStorage.setItem('hangok', hang_beallitas.value)
})


