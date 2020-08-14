const CoVID19NI = argsKnownCases => {
  let strReportedCases = argsKnownCases;
  let objDate = new Date();
  let currentDate = objDate.toDateString();
  let contactedOnes = Math.floor(Math.random() * 30) + 1;
  let indirectContactedOnes = Math.floor(Math.random() * 10) + 1;
  let totalAffected = contactedOnes * indirectContactedOnes * strReportedCases;
  let realCases = totalAffected + strReportedCases;
  return `So far (${currentDate}), only ${strReportedCases} Corona Virus cases have been reported by local authorities in Nicaragua. If each of these cases had contact with at least ${contactedOnes} individuals and then these ones had contact with at least ${indirectContactedOnes} more people each, We suspect that there must be around ${realCases} real cases in the whole country.`;
};
CoVID19NI(2);
