module.exports = function check(str, bracketsConfig) {
  const inputRules = [...bracketsConfig];
  const openRules = new Map(inputRules);
  const closeRules = new Map(Array.from([...openRules]).map(item => item.reverse()));

  const equalsRulesArr = bracketsConfig.filter(pair => pair[0] === pair[1]);
  console.log(equalsRulesArr);
  const equalsRules = new Map(equalsRulesArr);

  const result = [];



  if (str.length % 2 !== 0) return false;
  
  for (let i = 0; i < str.length; i++) {
   
    if (result.length === 0 && !openRules.has(str[i])) return false;

    if (openRules.has(str[i]) && (!equalsRules.has(str[i]) || (equalsRules.has(str[i]) && result.indexOf(str[i]) < 0))) {
      result.push(str[i]);
      continue;
    }


    if (closeRules.has(str[i]) && result[result.length-1] === closeRules.get(str[i])) {
      result.pop();
    }
  }
  return result.length === 0;
}


// function check(str, bracketsConfig) {
//   const inputRules = [...bracketsConfig];
//   const openRules = new Map(inputRules);
//   const closeRules = new Map(Array.from([...openRules]).map(item => item.reverse()));

//   const equalsRulesArr = bracketsConfig.filter(pair => pair[0] === pair[1]);
//   const equalsRules = new Map(equalsRulesArr);

//   const result = [];



//   if (str.length % 2 !== 0) return false;
  
//   for (let i = 0; i < str.length; i++) {
   
//     if (result.length === 0 && !openRules.has(str[i])) return false;

//     if (openRules.has(str[i]) && (!equalsRules.has(str[i]) || (equalsRules.has(str[i]) && result.indexOf(str[i]) < 0)) ) {
//       result.push(str[i]);
//       continue;
//     }


//     if (closeRules.has(str[i]) && result[result.length-1] === closeRules.get(str[i])) {
//       result.pop();
//     }
//   }
//   return result.length === 0;
// }



