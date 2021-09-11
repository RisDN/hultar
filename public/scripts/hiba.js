const hibaUzenet = document.getElementById('hiba-uzenet')
const hibaUzenetKijelzo = document.getElementById('hiba-uzenet-kijelzo')

function hiba(uzenet) {
    hibaUzenetKijelzo.innerHTML = uzenet
    hibaUzenet.style.display = 'block'
    setTimeout(function() {
        hibaUzenet.style.display = 'none'
    }, 3000)
}