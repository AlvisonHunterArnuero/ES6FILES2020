const getMiddle = (s) => {
  if (s.length < 2) return s;
  return s.length % 2 === 1
    ? s[Math.floor(s.length / 2)]
    : s[s.length / 2 - 1] + s[s.length / 2];
};
getMiddle("testing");
