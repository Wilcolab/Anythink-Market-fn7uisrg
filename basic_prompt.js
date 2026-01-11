function convertToCamelCase(...words) {
    return words
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage
console.log(convertToCamelCase('iteration', 'table')); // iterationTable
console.log(convertToCamelCase('hello', 'world', 'test')); // helloWorldTest