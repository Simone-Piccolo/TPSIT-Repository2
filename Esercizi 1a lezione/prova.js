const fs = require("fs");
const m = require("./esercizio_ripasso"); 


console.log("Prossimo numero dispari dopo 10:", m.prossimoDispari(10));
console.log("Tabellina del 3:\n", m.tabellina(3));
console.log("Fibonacci minori di 50:", m.fibonacci(50));


let testo = "";
for (let i = 1; i <= 10; i++) {
  testo += "Tabellina del " + i + "\n";
  testo += m.tabellina(i) + "\n";
}

fs.writeFileSync("tabelline.txt", testo);
console.log("File tabelline.txt creato!");
