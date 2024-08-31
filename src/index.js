module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const bracketPairs = {};
    const openBrackets = new Set();
    const sameBrackets = new Set();

    // Initialize the mappings from the configuration
    bracketsConfig.forEach(([open, close]) => {
        bracketPairs[close] = open; // Reverse the mapping for easy closing check
        openBrackets.add(open);
        if (open === close) {
            sameBrackets.add(open);
        }
    });

    for (let char of str) {
        if (sameBrackets.has(char)) {
            // Toggle the state for brackets that are the same for open/close
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop(); // Treat as closing bracket
            } else {
                stack.push(char); // Treat as opening bracket
            }
        } else if (openBrackets.has(char)) {
            stack.push(char); // Push opening bracket
        } else {
            // It's a closing bracket
            if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
                return false; // Mismatched closing bracket
            }
            stack.pop(); // Pop the matching opening bracket
        }
    }

    return stack.length === 0; // Check if all opened brackets are closed
};
