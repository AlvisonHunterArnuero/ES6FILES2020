const quarterOf = (month) => parseInt((month - 1) / 3) + 1;

// More rustic way of solving this
const quarterOfRustic = (month) => {
  let response = null;
  if (month >= 1 && month <= 3) response = 1;
  if (month > 3 && month <= 6) response = 2;
  if (month > 6 && month <= 9) response = 3;
  if (month > 9) response = 4;
  return parseInt(response);
};
