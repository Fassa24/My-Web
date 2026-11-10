//Mince
document.getElementById("tlačítko").addEventListener("click", hodMincí);


function hodMincí() {
    const možnosti = ["heads", "tails"];
    const hod = Math.round(Math.random());
    let mince = možnosti[hod];
    alert(mince); console.log(mince);
}

//Kostka
document.getElementById("kostka").addEventListener("click", hodKostky());

function hodKostky() {
    const strany = 6;
    const hod = Math.floor(Math.random() * strany) + 1;
  //  console.log(hod);
    document.getElementById("výsledek").innerHTML = "You rolled a ..." + hod + "!";
}
/*document.getElementById("kostka").addEventListener("click", hodKostky);

function hodKostky() {
    const hod = Math.floor(Math.random() * 6) + 1;
    alert(hod); //console.log(hod);
}*/

const form = document.getElementById("formKostka");

form.addEventListener("submit", function(event){
    const formData = new FormData(form);
    const početStran = formData.get("strany");

    console.log(formData);
    console.log(početStran);
    form.reset();
    return početStran
})
console.log(form);
            document.getElementById("kostka").addEventListener("click", hodKostky());

function hodKostky() {
    const strany = 6;
    const hod = Math.floor(Math.random() * strany) + 1;
  //  console.log(hod);
    document.getElementById("výsledek").innerHTML = "You rolled a ..." + hod + "!";
}
//
const form = document.getElementById("formKostka");

form.addEventListener("submit", funkceStrany(event));

function funkceStrany(event) {
    const početStran = formData.get("strany");
    if (početStran == "") {
        početStran = 6;
    }
    
    console.log(početStran);
    return početStran
}
