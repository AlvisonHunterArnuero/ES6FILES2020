// Ready for Gist guys
// Global function to generate a rnd number
const rndNumber = (maxNumber = 30, minNumber = 1) => {
  return Math.floor(Math.random() * maxNumber) + minNumber;
};
// main function goes here, we destructure the variables to be used
const coVid19NI = ({
  intReportedCases,
  objDate = new Date(),
  currentDate = objDate.toDateString(),
  contactedOnes = rndNumber(30),
  indirectContactedOnes = rndNumber(10)
} = {}) => {
  // Time to calculate all these values,  I did a correction from the previous version
  const totalAffected =
    intReportedCases * contactedOnes * indirectContactedOnes;
  const realCases =
    totalAffected + intReportedCases * contactedOnes + intReportedCases;
  // now we return the whole enchilada on this line, let's proceed to do this!
  return `So far (${currentDate}), only ${intReportedCases} Corona Virus cases have been reported by local authorities
  in Nicaragua. If each of these cases had contact with at least ${contactedOnes} individuals and then these ones had
  contact with at least ${indirectContactedOnes} more people each, We suspect that there must be around ${realCases}
  real cases in the whole country.`;
};
// Let's call the function now, time to put it into action
coVid19NI({
  intReportedCases: 3
});
