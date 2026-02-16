var http = require('http');
var url = require('url');

var cookies = [
  "Un viaggio inizia sempre con un primo passo.",
  "La fortuna aiuta gli audaci.",
  "Grandi opportunità sono davanti a te.",
  "Segui il tuo cuore.",
  "La pazienza è la chiave del successo.",
  "Un sorriso apre molte porte.",
  "Oggi è il giorno giusto per iniziare.",
  "Credi in te stesso.",
  "La felicità è nelle piccole cose.",
  "Imparerai qualcosa di nuovo oggi.",
  "Il cambiamento porta crescita.",
  "Ascolta il tuo istinto.",
  "Le sfide rendono forti.",
  "Un sogno sta per avverarsi.",
  "Ogni giorno è una nuova occasione.",
  "La perseveranza paga.",
  "Un incontro speciale ti sorprenderà.",
  "La calma porta chiarezza.",
  "Il successo arriva a chi insiste.",
  "Sii aperto alle novità."
];

var proverbi = [
  "Cu mancia fa muddichi.",
  "Cu nesci arrinesci.",
  "Cu avi lingua passa u mari.",
  "Cu dormi nun pigghia pisci.",
  "Cu fa beni, beni ricevi.",
  "Megghiu sulu ca mali accumpagnatu.",
  "Cu semina ventu raccogghi timpesta.",
  "U tempu è galantomu.",
  "Cu nun risica nun rosica.",
  "Cu è surdu, orbu e taci campa cent’anni 'mpaci.",
  "A mala nuttata fa u bonu juornu.",
  "Cu cadi e nun si susi, resta 'nterra.",
  "Ogni lassata è pirduta.",
  "Cu va chianu va luntanu.",
  "Cu pigghia 'nterra nun perdi guerra.",
  "Cu mancia sulu si strozza.",
  "U pisci feti dâ testa.",
  "Cu nasci tunnu nun po moriri quadratu.",
  "Cu troppu voli nenti strinci.",
  "A megghiu parola è chidda ca nun si dici."
];

function fraseCasuale(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var server = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;

  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

  if (pathname === "/cookie") {
    res.write(fraseCasuale(cookies));
  }
  else if (pathname === "/proverbi") {
    res.write(fraseCasuale(proverbi));
  }
  else {
    res.write("Errore: indirizzo non valido.\nUsa /cookie oppure /proverbi");
  }

  res.end();
});

server.listen(3000);
console.log("Server attivo su http://localhost:3000");


