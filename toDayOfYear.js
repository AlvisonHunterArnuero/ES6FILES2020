const toDayOfYear = (arr) => {
  let date = new Date(arr[1] + '/' + arr[0] + '/' + arr[2]);
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
};

toDayOfYear([1, 1, 2000]); //  => 1
toDayOfYear([25, 12, 2017]); // 359
toDayOfYear([31, 10, 1991]); // 304
toDayOfYear([1, 5, 3000]); // 121
toDayOfYear([14, 3, 1066]); // 73
toDayOfYear([5, 11, 1604]); // 310
