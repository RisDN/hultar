
function veglegesTorles(id) {
    document.querySelector(`#targy-${id}`).remove()

    if(localStorage.getItem('hangok') == 'bekapcsolva') {
        document.querySelector('#torles').volume = 0.2
        document.querySelector('#torles').play()
    }

    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-lista"));
    let vissza = []
    for(let i = 0; i < mentett_targyak.length; i++) {
        if(mentett_targyak[i].id != id) {
            vissza.push(mentett_targyak[i])
        }
    }
    localStorage.setItem('hultar-lista', JSON.stringify(vissza));
}