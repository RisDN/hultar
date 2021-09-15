

const beallitasokIkonok = document.querySelector('.elerheto-ikonok')
const ikonokLenyitasaGomb = document.querySelector('#ikonok-lenyitas')

ikonok.forEach((ikon) => {
    let ujIkon = document.createElement('div')
    ujIkon.className = 'ikonok'
    ujIkon.innerHTML = `<img width="28" height="28" src="kepek/${ikon}.png">  <h6>${ikon}</h6> `
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
    if(window.confirm('Biztosan szeretnéd törölni az összes adatot a hültárból?')) {
        localStorage.removeItem('hultar-adat')
        localStorage.removeItem('hultar-lista')  
        alert('Törölve!')
    }
})


adatTorlesGombBe.addEventListener('click', () => {
    if(window.confirm('Biztosan szeretnéd törölni az összes adatot a bevásárló listából?')) {
        localStorage.removeItem('hultar-lista')
        alert('Törölve!')
    }
})

adatTorlesGombLel.addEventListener('click', () => {
    if(window.confirm('Biztosan szeretnéd törölni az összes adatot a hütő leltárból?')) {
        localStorage.removeItem('hultar-adat')
        alert('Törölve!')
    }
})