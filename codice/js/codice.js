const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h",
            "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x",
            "y", "z", "a", "b"];
let testoS = [];

const testoU = prompt("Inserisci il testo:");

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

console.log(`\n${testoS.join("")}`);

console.log(`\n${alfabeto.join("")}`);
