    module.exports = function check(str, bracketsConfig) {
  if (str.trim().length===0 || bracketsConfig.length===0) return false; 
  var count = [];
  var obj = {};
  for (var i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i].length!==2) {
          return false;
      }
  }
  const arrStr = str.split('');
  for (var j = 0; j < arrStr.length; j++) {
      for (var i = 0; i < bracketsConfig.length; i++) {
      if (arrStr[j]===bracketsConfig[i][0]) {
                    if (obj[bracketsConfig[i][0]] == null) {
                   count.push(bracketsConfig[i][0]);
                  if (bracketsConfig[i][0]===bracketsConfig[i][1]) { 
                    obj[bracketsConfig[i][0]] = true; 
                  }
              } 
              else {
                  delete obj[bracketsConfig[i][0]];
              }
           }
          if (arrStr[j]===bracketsConfig[i][1]) {
              if (obj[bracketsConfig[i][0]] == null) {
                  if (count.length===0) return false;
                   var pop = count.pop();
                  if (pop !== bracketsConfig[i][0]) 
                  return false;
              }
          }
      }
  }
  return count.length===0;
}