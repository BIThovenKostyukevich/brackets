function check(str, bracketsConfig) {
  const stack = [];
  const bracketPairs = {};
  const openBrackets = new Set();
  const closeBrackets = new Set();
  const sameBrackets = new Set();

 
  bracketsConfig.forEach(([open, close]) => {
      bracketPairs[open] = close;
      openBrackets.add(open);
      closeBrackets.add(close);
      if (open === close) {
          sameBrackets.add(open);
      }
  });

  for (let char of str) {
      if (sameBrackets.has(char)) {
          
          if (stack.length > 0 && stack[stack.length - 1] === char) {
              stack.pop(); 
          } else {
              stack.push(char); 
          }
      } else if (openBrackets.has(char)) {
          stack.push(char); 
      } else if (closeBrackets.has(char)) {
          if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
              return false; 
          }
      }
  }

  return stack.length === 0; 
}

module.exports = function check(str, bracketsConfig) {
  return check(str, bracketsConfig);
};

