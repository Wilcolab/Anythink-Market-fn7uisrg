function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number')); // mobileNumber

function toCamelCase(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        throw new Error('Invalid input: Input must be a non-empty string.');
    }
    
    if (/[^a-zA-Z0-9-_ ]/.test(str)) {
        throw new Error('Invalid input: String contains special characters.');
    }

    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}