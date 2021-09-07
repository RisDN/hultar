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
    } else { alert('irj be') }
})


function menuAlaphelyzet() {
    szovegdoboz.value = null
    mennyiseg.value = 1
}