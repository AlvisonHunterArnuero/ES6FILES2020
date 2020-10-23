const arrSkills = [
  "AngularJS",
  "VueJS",
  "ReactJS",
  "VB .NET",
  "ASP.NET / C#",
  "Python",
  "Visual Basic For Applications",
  "UX/UI Enthusiastic",
  "NodeJS & Express",
  "MySQL",
  "MongoDB",
];
const displaySkills = (skills) => {
  let msg = "Experienced Developer: ";
  console.log(msg.toUpperCase());
  skills.forEach((skill) => console.log(skill));
};

displaySkills(arrSkills);
