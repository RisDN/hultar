
function darabSzamAllitas(id, hova) {
    if(hova == 'fel') {
        const mentett_targyak = JSON.parse(localStorage.getItem("hultar-lista"));
        let vissza = []
        for(let i = 0; i < mentett_targyak.length; i++) {
            if(mentett_targyak[i].id == id) {
                mentett_targyak[i].darabszam++
                vissza.push(mentett_targyak[i])
            } else {
                vissza.push(mentett_targyak[i])
            }
        }
        localStorage.setItem('hultar-lista', JSON.stringify(vissza));

        let regi = document.getElementById(`targy-${id}`).querySelector('.darabszam').innerHTML
        let elvagott = regi.split(' ')
        let ujMennyiseg = parseInt(elvagott[0]) + 1
        document.getElementById(`targy-${id}`).querySelector('.darabszam').innerHTML = `${ujMennyiseg} ${elvagott[1]}`


    } 
    if(hova == 'le') {

        const mentett_targyak = JSON.parse(localStorage.getItem("hultar-lista"));
        let vissza = []
        for(let i = 0; i < mentett_targyak.length; i++) {
            if(mentett_targyak[i].id == id) {
                if(mentett_targyak[i].darabszam > 0) {
                    mentett_targyak[i].darabszam--
                    vissza.push(mentett_targyak[i])
                } else {
                    vissza.push(mentett_targyak[i])
                }
            } else {
                vissza.push(mentett_targyak[i])
            }
        }
        localStorage.setItem('hultar-lista', JSON.stringify(vissza));

        let regi = document.getElementById(`targy-${id}`).querySelector('.darabszam').innerHTML
        console.log(regi)
        let elvagott = regi.split(' ')
        console.log(elvagott)
        if(parseInt(elvagott[0]) > 0) {
            let ujMennyiseg = parseInt(elvagott[0]) - 1
            document.getElementById(`targy-${id}`).querySelector('.darabszam').innerHTML = `${ujMennyiseg} ${elvagott[1]}`
        }


    }

}