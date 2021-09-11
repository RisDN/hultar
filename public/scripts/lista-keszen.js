function keszenVanE(id, helyzet) {
    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-lista"));
    mentett_targyak.forEach(melyik => {
        if(melyik.id == id) { 
            melyik.keszenvane = helyzet
        }
    });
    document.querySelectorAll(`#targy-${id}-stilus`)[0].className = helyzet
    document.querySelectorAll(`#targy-${id}-stilus`)[1].className = helyzet
    localStorage.setItem('hultar-lista', JSON.stringify(mentett_targyak));
}
