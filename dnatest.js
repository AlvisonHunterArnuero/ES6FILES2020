// Ready for Gist
"use strict";
const start_codon = "AUG";
const stop_codon = "STOP";
const codon_to_amino_acid = {
  AUG: "Met",
  CAA: "Gln",
  CAG: "Gln",
  GGU: "Gly",
  GCG: "Ala",
  UUU: "Phe",
  UUC: "Phe",
  UGG: "Trp",
  UAA: stop_codon,
  UAG: stop_codon,
  UGA: stop_codon
};
// use to validate only the allowed characters on the regEx rule
function allowedCharacters(concatString) {
  var letters = /^[AUGCTaugct]+$/;
  if (concatString.match(letters)) {
    return true;
  } else {
    return false;
  }
}
// Codons to Amino Acids Translation
function setAminoString(res) {
  if (res) {
    let strConcatenatedValues = [];
    let arrResults = res.match(/.{1,3}/g);
    arrResults.forEach(element => {
      strConcatenatedValues.push(codon_to_amino_acid[element]);
    });
    console.log(strConcatenatedValues.join(" "));
  } else {
    throw new Error("Invalid characters");
  }
}

// Part 1 implementation
function protein_synthesis_part_1(dna) {
  let boolAllowedChars = allowedCharacters(dna);
  if (boolAllowedChars) {
    // Verify the gene's length is multiple of 3
    if (dna.length % 3 !== 0) {
      return alert("This gene's length must be a multiple of 3");
    } else {
      // Transcribe the DNA TO mRNA
      let mRNA = dna;
      let strTempmRNA;
      let stopCodonPosition = 0;
      // clearing the DNA base pairs by replacing the T by an U
      let boolVal = dna.indexOf("T");
      boolVal ? (mRNA = dna.replace(/T/g, "U")) : (mRNA = dna);
      // Find where the start codon is
      let startCodonPosition = mRNA.search("AUG");
      // Find the first Stop Codon position to end the string
      stopCodonPosition = mRNA.search(/UAA|UAG|UGA/);
      strTempmRNA = mRNA.slice(startCodonPosition, stopCodonPosition);
      return strTempmRNA;
    }
  } else {
    throw new Error("Invalid characters");
  }
}

// Part 2 implementation
function protein_synthesis_part_2(dna) {
  let boolAllowedChars = allowedCharacters(dna);
  if (boolAllowedChars) {
    // validate the length of this
    if (dna.length % 3 !== 0) {
      return console.log("Exon length must be a multiple of 3");
    } else {
      //String that will contain the exons to be transcribed and translated
      let concatMRNAString = "";
      // get current param and add it to this local variable
      let strRemoveIntrons = dna;
      // Cleaning the introns on this string as requested
      let strCurrentExons = strRemoveIntrons.replace(/[a-z]/g, "");
      //Let's pass it as params to both of these functions to complete the aminos process
      concatMRNAString = protein_synthesis_part_1(strCurrentExons);
      setAminoString(concatMRNAString);
    }
  } else {
    throw new Error("Invalid characters");
  }
}

function main() {
  // passing the string as a parameter manually to avoid using prompt
  const getmRNAString = protein_synthesis_part_1("CAAATGCAGGCGTAA");
  //Proceed to translate all codons except the ones to stop the flow.
  setAminoString(getmRNAString);
  // Second Part, where introns and exons are passed as parameter in a whole string
  protein_synthesis_part_2("uagATGcagCAGuaaGCGugaTAA");
}
main();
