//No seria mas adecuado asi bro, por lo de las constantes?
const BEG = "Buscalo en Google!! 🧔";
const MIHY = "En que puedo ayudarte? 👨‍🦱";
const getHelp = (helpMate) =>
  helpMate.toUpperCase().includes("HOSMEL") ? BEG : MIHY;
// Llama la funcion aca con el Hosmelito de parametro
getHelp("Hosmel");
