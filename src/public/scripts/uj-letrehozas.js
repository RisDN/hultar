const menu_1_body = document.querySelector('#uj-1')
const menu_1_footer = document.querySelector('#uj-1-footer')

const menu_2_body = document.querySelector('#uj-2')
const menu_2_footer = document.querySelector('#uj-2-footer')

const menu_3_body = document.querySelector('#uj-3')
const menu_3_footer = document.querySelector('#uj-3-footer')

const ujnevbeiras = document.querySelector('#uj-nev-beiras')
const ujmennyisegbeiras = document.querySelectorAll('#uj-2-mennyiseg')

function ujLetrehozasMenu(melyik){
    if(melyik == 1) {
        megjelenit(1)
        elrejtes(2)
        elrejtes(3)
    }
    if(melyik == 2) {
        if(ujnevbeiras.value.length != 0) {
            ujmennyisegbeiras[0].innerHTML = nagyBetu(ujnevbeiras.value)
            ujmennyisegbeiras[1].innerHTML = nagyBetu(ujnevbeiras.value)
            megjelenit(2)
            elrejtes(1)
            elrejtes(3)
        } else{
            hiba('Kérlek írj be egy nevet!')
        }
    }
    if(melyik == 3) {
        megjelenit(3)
        elrejtes(1)
        elrejtes(2)
    }
}

function megjelenit(melyik) {
    document.querySelector(`#uj-${melyik}`).style.display = 'block'
    document.querySelector(`#uj-${melyik}-footer`).style.display = 'block'
}

function elrejtes(melyik) {
    document.querySelector(`#uj-${melyik}`).style.display = 'none'
    document.querySelector(`#uj-${melyik}-footer`).style.display = 'none'
}
ujLetrehozasMenu(1)
