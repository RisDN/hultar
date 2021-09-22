
function veglegesTorles(id) {
    document.getElementById(id).remove()

    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-adat"));
    let vissza = []
    for(let i = 0; i < mentett_targyak.length; i++) {
        if(mentett_targyak[i].id != id) {
            vissza.push(mentett_targyak[i])
        }
    }
    localStorage.setItem('hultar-adat', JSON.stringify(vissza));
}



function darabSzamAllitas(id, hova) {
    if(hova == 'fel') {
        const mentett_targyak = JSON.parse(localStorage.getItem("hultar-adat"));
        let vissza = []
        for(let i = 0; i < mentett_targyak.length; i++) {
            if(mentett_targyak[i].id == id) {
                mentett_targyak[i].mennyiseg++
                vissza.push(mentett_targyak[i])
            } else {
                vissza.push(mentett_targyak[i])
            }
        }
        localStorage.setItem('hultar-adat', JSON.stringify(vissza));
    
    
        let regi = document.getElementById(id).querySelector('.targy-mertekegyseg').innerHTML
        let elvagott = regi.split(' ')
        let ujMennyiseg = parseInt(elvagott[0]) + 1
        document.getElementById(id).querySelector('.targy-mertekegyseg').innerHTML = `${ujMennyiseg} ${elvagott[1]}`

    } 
    if(hova == 'le') {

        const mentett_targyak = JSON.parse(localStorage.getItem("hultar-adat"));
        let vissza = []
        for(let i = 0; i < mentett_targyak.length; i++) {
            if(mentett_targyak[i].id == id) {
                if(mentett_targyak[i].mennyiseg > 0) {
                    mentett_targyak[i].mennyiseg--
                    vissza.push(mentett_targyak[i])
                } else {
                    vissza.push(mentett_targyak[i])
                }
            } else {
                vissza.push(mentett_targyak[i])
            }
        }
        localStorage.setItem('hultar-adat', JSON.stringify(vissza));
    
    
        let regi = document.getElementById(id).querySelector('.targy-mertekegyseg').innerHTML
        let elvagott = regi.split(' ')
        if(parseInt(elvagott[0]) > 0) {
            let ujMennyiseg = parseInt(elvagott[0]) - 1
            document.getElementById(id).querySelector('.targy-mertekegyseg').innerHTML = `${ujMennyiseg} ${elvagott[1]}`
        }

    }

}