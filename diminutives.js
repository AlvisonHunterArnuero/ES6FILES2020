const arrDiminutives = [
  { name: "Albert", dim: "Al" },
  { name: "Bradley", dim: "Brad" },
  { name: "Alexander", dim: "Al, Alex, Xander, Sandy, Alec" },
  { name: "Alfred", dim: "Fred, Freddy, Alf, Alfie" },
  { name: "Andrew", dim: "Andy" },
  { name: "Benjamin", dim: "Ben, Benny" },
  { name: "Bernard", dim: "Bernie" },
  { name: "Calvin", dim: "Cal" },
  { name: "Charles", dim: "Charlie, Charley, Chuck" },
  { name: "Daniel", dim: "Danny, Dan" },
  { name: "David", dim: "Dave, Davey" },
  { name: "Duncan", dim: "Dunc" },
  { name: "Edward", dim: "Ned, Ed, Eddy, Eddie" },
  { name: "Henry", dim: "Harry , Hal" },
  { name: "Jacob", dim: "Jake" },
  { name: "James", dim: "Jamie, Jim, Jimmy, Jimbo" },
  { name: "John", dim: "Johnny, Jack, Jake" },
  { name: "Jonathan", dim: "Jon" },
  { name: "Joseph", dim: "Joe , Joey" },
  { name: "Joshua", dim: "Josh" },
  { name: "Lawrence", dim: "Larry, Laurie" },
  { name: "Michael", dim: "Mike, Mick, Micky" },
  { name: "Nicholas", dim: "Nick, Nicky" },
  { name: "Paul", dim: "Pauly, Pauley" },
  { name: "Peter", dim: "Pete, Pita" },
  { name: "Philip", dim: "Phil" },
  { name: "Richard", dim: "Richie, Rick, Dick" },
  { name: "Robert", dim: "Rob, Bob, Bobby, Robbie" },
  { name: "Ronald", dim: "Ron" },
  { name: "Salvatore", dim: "Sal" },
  { name: "Samuel", dim: "Sam, Sammy" },
  { name: "Simon", dim: "Si" },
  { name: "Stephen", dim: "Steven,Steve, Ste" },
  { name: "Stewart", dim: "Stu" },
  { name: "Terence", dim: "Terry" },
  { name: "Thomas", dim: "Tom, Tommy" },
  { name: "Timothy", dim: "Tim, Timmy" },
  { name: "William", dim: "Bill, Billy, Will, Willy" },
  { name: "Abigail", dim: "Abby, Abbie, Abie" },
  { name: "Amanda", dim: "Mandy/ Mindy" },
  { name: "Alison", dim: "Ali, Ally, Allie" },
  { name: "Barbara", dim: "Barb, Barbie" },
  { name: "Beverly, Beverley", dim: "Bev" },
  { name: "Charlotte", dim: "Lotte, Lottie, Char, Charlie" },
  { name: "Deborah", dim: "Deb, Debbie" },
  { name: "Dorothy", dim: "Dot, Dotty" },
  {
    name: "Elizabeth",
    dim: "Liz, Lizzie, Liza, Libb, Lisbeth, Beth, Bessie, Bess",
  },
  { name: "Emily", dim: "Em, Emy" },
  { name: "Hilary", dim: "Hil" },
  { name: "Jennifer", dim: "Jenny, Jen" },
  { name: "Kathryn", dim: "Kate ,Katie" },
  { name: "Margaret", dim: "Maggie, Meg, Maisie" },
  { name: "Natasha", dim: "Tash, Tasha" },
  { name: "Nicola", dim: "Nicky" },
  { name: "Pamela", dim: "Pam, Pammy" },
  { name: "Patricia", dim: "Pat, Patty, Patsy, Trish, Trisha" },
  { name: "Philippa", dim: "Pippa" },
  { name: "Rachel", dim: "Rae" },
  { name: "Sally", dim: "Sal" },
  { name: "Sandra", dim: "Sandy" },
  { name: "Susan", dim: "Suzie, Sue, Suze" },
  { name: "Victoria", dim: "Vicky, Vic" },
  { name: "Virginia", dim: "Ginny" },
];
const findDiminutive = (argName) => {
  let msg = "";
  const result = arrDiminutives.filter(
    (person) => person.name.toUpperCase() === argName.toUpperCase()
  );
  if (result === undefined) {
    msg = "Not found!";
    console.log(argName, msg);
    return 0;
  } else {
    msg = "diminutives are the following: ";
    console.log(argName, msg);
    return result[0].dim;
  }
};
findDiminutive("alvison");
