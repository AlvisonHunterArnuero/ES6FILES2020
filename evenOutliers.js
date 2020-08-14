/*filters a list of strings and returns a list with only your friends
with 4 letters name in it. */

const names = ["Billi", "Lucas", "Ryan", "Jorge", "Sam", "Hector", "Kyle"];
const fnMyFriends = (arr) => {
  let friends = [];
  friends = names.filter((name) => name.length <= 4);
  console.log(`My Friends are:  ${friends}`);
};

fnMyFriends(names);
