function traduci(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h",
                    "i", "j", "k", "l", "m", "n", "o", "p",
                    "q", "r", "s", "t", "u", "v", "w", "x",
                    "y", "z", "a", "b"];
    let testoS = [];

    let testoU = document.getElementById("testo").value

    for (let i = 0; i < testoU.length; i++) {
        if (testoU[i] === " ") {
            testoS.push("__");
        } else {
            for (let j = 0; j < 26; j++) {
                if (testoU[i] === alfabeto[j]) {
                    testoS.push(alfabeto[j + 2]);
                    break;
                }
            }
        }
    }
    document.getElementById("testoT").value = testoS.join("");
}

function tradotto(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h",
                    "i", "j", "k", "l", "m", "n", "o", "p",
                    "q", "r", "s", "t", "u", "v", "w", "x",
                    "y", "z", "a", "b"];
    let testoS = [];
    
    let testoU = document.getElementById("testo").value
    
    for (let i = 0; i < testoU.length; i++) {
        if (testoU[i] === " ") {
            testoS.push("__");
        } else {
            for (let j = 0; j < 26; j++) {
                if (testoU[i] === alfabeto[j]) {
                    testoS.push(alfabeto[j - 2]);
                    break;
                }
            }
        }
    }
    document.getElementById("testoT").value = testoS.join("");
}

function switchType(){ 
    let tipoTraduzione = document.querySelector('input[name="tipoTraduzione"]:checked').value;
console.log(tipoTraduzione)
    if(tipoTraduzione == "traduci"){
        tradotto()
    }
    else if(tipoTraduzione == "tradotto"){
        traduci()
    }

}