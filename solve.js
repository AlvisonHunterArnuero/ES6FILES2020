const solve = (args) => {
  let countLowercase = [];
  let countUppercase = [];
  let arrTemp = Array.from(args);
  console.log(arrTemp);
  countUppercase = arrTemp.filter((chr) => chr === chr.toUpperCase());
  countLowercase = arrTemp.filter((chr) => chr === chr.toLowerCase());
  if (countUppercase.length > countLowercase.length) {
    return args.toUpperCase();
  } else {
    return args.toLowerCase();
  }
};

solve("coDe");
