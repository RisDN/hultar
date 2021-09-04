function keszenVanE(id, helyzet) {
    const mentett_targyak = JSON.parse(localStorage.getItem("hultar-lista"));
    mentett_targyak.forEach(melyik => {
        if(melyik.id == id) { 
            melyik.keszenvane = helyzet
        }
    });
    document.getElementById(`${id}-stilus`).className = helyzet
    localStorage.setItem('hultar-lista', JSON.stringify(mentett_targyak));
}
