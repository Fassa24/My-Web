//Mince
document.getElementById("tlačítko").addEventListener("click", hodMincí);


function hodMincí() {
    const možnosti = ["heads", "tails"];
    const hod = Math.round(Math.random());
    let mince = možnosti[hod];
    alert(mince); console.log(mince);
}

//Kostka
/*document.getElementById("kostka").addEventListener("click", hodKostky);

function hodKostky() {
    const hod = Math.floor(Math.random() * 6) + 1;
    alert(hod); //console.log(hod);
}*/