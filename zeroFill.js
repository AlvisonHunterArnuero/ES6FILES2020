const fillWithZeros = (params) => {
  if (params > 99) {
    return (
      "New Number is: " +
      params.toString().substring(0, params.toString().length - 2) +
      "00"
    );
  }
  return "New Number is: " + params.toString();
};

// let's try it with some examples, nicoyitas!
fillWithZeros(89780);
fillWithZeros(32);
fillWithZeros(234978);
