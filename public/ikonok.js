
const ikonok = [
    'tej',
    'vaj',
    'sonka',
    'kifli',
    'kenyer',
]

const asd = document.querySelector('.asdasd')
ikonok.forEach(ikon => {
    let kep = document.createElement('img')
    kep.src = `public/kepek/${ikon}.png`
    kep.width = 48
    kep.height = 48
    asd.appendChild(kep)
});
