const activeUsers = ['Hosmel', 'Billi', 'Polin', 'Stein', 'Alvison'];
const isActive = (argUser)=>{
  const found = activeUsers.find(element => element.toLowerCase() === argUser.toLowerCase());
let res  = found !== undefined ? `${argUser} is an active user.` : `${argUser} does not exist in our records.`;
  return res;
}
  isActive('Guido');


