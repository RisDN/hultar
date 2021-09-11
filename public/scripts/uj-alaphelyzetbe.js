const nevBeiras = document.querySelector('#uj-nev-beiras')
const mennyisegBeiras = document.querySelector('#uj-mennyiseg-beiras')
const lejaratiDatumBeiras = document.querySelector('#uj-lejaratidatum-beiras')

function ujAlaphelyzetbe() {
    ujLetrehozasMenu(1)
    nevBeiras.value = null
    mennyisegBeiras.value = 1
    lejaratiDatumBeiras.valueAsDate = null
}
