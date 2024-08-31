function check(str, bracketsConfig) {
    const stack = [];
    const bracketPairs = {};
    const openBrackets = new Set();
    const sameBrackets = new Set();

    // Initialize mappings and sets
    bracketsConfig.forEach(([open, close]) => {
        bracketPairs[close] = open;  // Map closing bracket to opening bracket
        openBrackets.add(open);      // Add to open brackets set
        if (open === close) {
            sameBrackets.add(open);  // Add to same brackets set
        }
    });

    for (let char of str) {
        if (sameBrackets.has(char)) {
            // For brackets that are the same for open/close
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop(); // Treat as closing bracket if it's already in stack
            } else {
                stack.push(char); // Treat as opening bracket
            }
        } else if (openBrackets.has(char)) {
            stack.push(char); // Push opening bracket onto stack
        } else {
            // Char is a closing bracket, check if it matches the last opened
            if (stack.length === 0 || bracketPairs[char] !== stack.pop()) {
                return false; // Mismatch found
            }
        }
    }

    return stack.length === 0; // Ensure all brackets are matched
}

module.exports = function check(str, bracketsConfig) {
    return check(str, bracketsConfig);
};
