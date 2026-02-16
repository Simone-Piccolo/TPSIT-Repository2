//primo numero dispari successivo al valore passato
function prossimoDispari(n) {
if ((n + 1) % 2 === 0) return n + 2;
return n + 1;
}

// tabellina del valore passato (compreso tra 1 e 10)
function tabellina(n) {
  if (n < 1 || n > 10) return "Numero non valido (deve essere tra 1 e 10)";
  
  let t = "";
  for (let i = 1; i <= 10; i++) {
    t += n + " x " + i + " = " + (n * i) + "\n";
  }
  return t;
}


// fibonacci termini inferiori al valore passato 
function fibonacci(n) {
let a = 0, b = 1;
let risultato = "";

while (a < n) {
risultato += a + " ";
let temp = a + b;
a = b;
b = temp;
}
return risultato;
}

module.exports = { prossimoDispari, tabellina, fibonacci };   
