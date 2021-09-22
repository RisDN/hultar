const nevBeiras = document.querySelector('#uj-nev-beiras')
const mennyisegBeiras = document.querySelector('#uj-mennyiseg-beiras')
const lejaratiDatumBeiras = document.querySelector('#uj-lejaratidatum-beiras')

function ujAlaphelyzetbe() {
    ujLetrehozasMenu(1)
    nevBeiras.value = null
    mennyisegBeiras.value = 1


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    
    document.querySelector('#uj-lejaratidatum-beiras').value =  `${yyyy}-${mm}-${dd}`
    

}
