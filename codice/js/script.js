const key = prompt("Inserisci una key")
function traduci() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h",
                    "i", "j", "k", "l", "m", "n", "o", "p",
                    "q", "r", "s", "t", "u", "v", "w", "x",
                    "y", "z", "a", "b"];
    let testoS = [];

    let testoU = document.getElementById("testo").value.toLowerCase();
    for (let i = 0; i < testoU.length; i++) {
        if (testoU[i] === " ") {
            testoS.push("_");
        } else {
            let index = alfabeto.indexOf(testoU[i]);
            if (index !== -1) {
                testoS.push(alfabeto[(index + (+key)) % 26]);
            } else {
                testoS.push(testoU[i]);
            }
        }
    }
    document.getElementById("testoT").value = testoS.join("");
}

function tradotto() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h",
                    "i", "j", "k", "l", "m", "n", "o", "p",
                    "q", "r", "s", "t", "u", "v", "w", "x",
                    "y", "z", "a", "b"];
    let testoS = [];

    let testoU = document.getElementById("testo").value.toLowerCase();

    for (let i = 0; i < testoU.length; i++) {
        if (testoU[i] === "_") {
            testoS.push(" ");
        } else {
            let index = alfabeto.indexOf(testoU[i]);
            if (index !== -1) {
                testoS.push(alfabeto[(index - key + 26) % 26]);
            } else {
                testoS.push(testoU[i]);
            }
        }
    }
    document.getElementById("testoT").value = testoS.join("");
}


function switchType(){ 
    let tipoTraduzione = document.querySelector('input[name="tipoTraduzione"]:checked').value;
console.log(tipoTraduzione)
    if(tipoTraduzione == "traduci"){
        traduci()
    }
    else if(tipoTraduzione == "tradotto"){
        tradotto()
    }

}