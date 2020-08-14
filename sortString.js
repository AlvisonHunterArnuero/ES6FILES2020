const longest = (str1,str2) => {
  let reg = /\d/;
  if(reg.test(str1) || reg.test(str2)) {
    console.log('No numbers allowed, bye!');
    return 0;
  }
  
  let concaText = str1.concat(str2).toUpperCase();
  let propsSet = new Set(concaText);
  let res = Array.from(propsSet).sort().join('').toLowerCase();
  return res;
}

longest('xyaabbbccccdefww','xxxxyyyyabklmopq');