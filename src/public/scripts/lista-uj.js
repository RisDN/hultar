const hozzaadasgomb = document.getElementById('uj-hozzaadas-gomb')
const szovegdoboz = document.getElementById('uj-szoveg')
const mennyiseg = document.getElementById('uj-mennyiseg-beiras')
const mertekegyseg = document.getElementById('uj-mertekegyseg')


hozzaadasgomb.addEventListener('click', () => {
    let megadott_szoveg = szovegdoboz.value
    let megadott_mennyiseg = mennyiseg.value 
    let megadott_mertekegyseg = mertekegyseg.value 
    if(megadott_szoveg.length != 0) {
        hozzaAdas(megadott_szoveg, megadott_mennyiseg, megadott_mertekegyseg)
        szovegdoboz.value = null
        $('#myModal').modal('hide')

        if(localStorage.getItem('hangok') == 'bekapcsolva') {
            document.querySelector('#iras').volume = 0.2
            document.querySelector('#iras').play()
        }

    } else { hiba('Kérlek írj be egy nevet!') }
})


function menuAlaphelyzet() {
    szovegdoboz.value = null
    mennyiseg.value = 1
}