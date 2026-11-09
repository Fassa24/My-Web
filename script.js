//Mince
document.getElementById("tlačítko").addEventListener("click", hodMincí);


function hodMincí() {
    const možnosti = ["heads", "tails"];
    const hod = Math.random();
    let mince = možnosti[Math.round(hod)];
    alert(mince); //console.log(mince);
}