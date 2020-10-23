let merosJavaScriptMasters = [
  ["Stein", "ReactJS"],
  ["Hosmel", "NextJS"],
  ["Billi", "Gatsby"],
  ["Polin", "Java"],
  ["JC", "JavaScript"],
];
const pushNewJavaScriptMaster = (argName, argFavLanguage) => {
  if (typeof argName == "undefined" || typeof argFavLanguage == "undefined") {
    console.log("Error:  Function parameters are mandatory.");
    return;
  } else {
    merosJavaScriptMasters.push([argName, argFavLanguage]);
    console.log("The new JavaScript Masters Tribe are:");
    console.table(merosJavaScriptMasters);
  }
};
pushNewJavaScriptMaster("Luisito Guido", "AngularJS");