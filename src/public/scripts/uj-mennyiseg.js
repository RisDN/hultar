
function ujMennyisegAllitas(csokispite) {
    let mennyiseg = document.querySelector('#uj-mennyiseg-beiras').value
    if(csokispite == 'plussz') {
        if(mennyiseg <= 99) { document.querySelector('#uj-mennyiseg-beiras').value++ }
    }
    if(csokispite == 'minusz') {
        if(mennyiseg > 1) { document.querySelector('#uj-mennyiseg-beiras').value-- }
    }
}