const mindTwister = () => {
  let sun = true;
  let moon = false;
  let earth = !sun !== true ? !moon : !true;
  let res = `Ok Nicoyas, [!🌞 !== true] equals true and !🌝 is true,
then the 🌏 should def be [${earth}] 👹`;
  return res;
};
mindTwister();
