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
  UGA: stop_codon,
};

function protein_synthesis_part_one(dna) {
  let mrNA = "";
  for (let i = 0; i < dna.length; i++) {
    let currentChar = dna.charAt(i);
    if (currentChar === " ") continue;
    if (currentChar === "T") {
      currentChar = "U";
    }
    mrNA += currentChar;
  }
  let i = 0;
  let protein = "";
  let aminoAcid = "";
  let startFound = false;
  while (i < mrNA.length) {
    let threeBase = mrNA.substring(i, i + 3);
    if (threeBase === start_codon) {
      startFound = true;
    }
    if (startFound === true) {
      aminoAcid = codon_to_amino_acid[threeBase];
      protein += aminoAcid + " ";
    }
    i += 3;
  }
  if (aminoAcid !== stop_codon) {
    protein = "INVALID";
  } else {
    protein = protein.substring(0, protein.length - 6);
  }
  return protein.trim();
}

function protein_synthesis_part_two(dna) {
  //  console.log('input', dna)
  let mrNA = "";
  for (let i = 0; i < dna.length; i++) {
    let currentChar = dna.charAt(i);
    if (currentChar === currentChar.toLowerCase()) {
      continue;
    }
    if (currentChar === " ") continue;
    if (currentChar === "T") {
      currentChar = "U";
    }
    mrNA += currentChar;
  }
  let i = 0;
  let protein = "";
  let aminoAcid = "";
  let startFound = false;
  while (i < mrNA.length) {
    let threeBase = mrNA.substring(i, i + 3);

    if (threeBase === start_codon) {
      startFound = true;
    }
    if (startFound === true) {
      aminoAcid = codon_to_amino_acid[threeBase];
      protein += aminoAcid + " ";
    }
    i += 3;
  }
  if (aminoAcid !== stop_codon) {
    protein = "INVALID";
  } else {
    protein = protein.substring(0, protein.length - 6);
  }
  if (protein.length < 11) {
    protein = "INVALID";
  }
  return protein.trim();
}

console.log(protein_synthesis_part_one("AUGCAGTAA"));
console.log(protein_synthesis_part_two("AUGCAGTAA"));
