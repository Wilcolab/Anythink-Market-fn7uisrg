/**
 * Converts a string to camelCase format.
 * 
 * Transforms the input string by:
 * - Splitting on non-alphanumeric characters
 * - Making the first word lowercase
 * - Capitalizing the first letter of subsequent words
 * - Joining all words without separators
 * 
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The input string converted to camelCase, or an empty string if input is empty
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toCamelCase('hello_world');      // "helloWorld"
 * toCamelCase('hello#world');      // "helloWorld"
 * toCamelCase('hello123world');    // "hello123world"
 * toCamelCase('   ');              // ""
 * toCamelCase('HelloWorld');       // "helloworld"
 * toCamelCase('hello-world-test'); // "helloWorldTest"
 */

/**
 * Converts a string to dot.case format.
 * 
 * Transforms the input string by:
 * - Splitting on non-alphanumeric characters
 * - Converting all characters to lowercase
 * - Joining words with dot (.) separators
 * 
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The input string converted to dot.case, or an empty string if input is empty
 * @throws {TypeError} If input is not a string
 * 
 * @example
 * toDotCase('hello_world');      // "hello.world"
 * toDotCase('hello#world');      // "hello.world"
 * toDotCase('hello123world');    // "hello123world"
 * toDotCase('   ');              // ""
 * toDotCase('HelloWorld');       // "hello.world"
 * toDotCase('hello-world-test'); // "hello.world.test"
 */
function toCamelCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new TypeError(`${typeof input} cannot be converted to camelCase. Expected a string.`);
    }

    // Handle empty strings or strings with only spaces
    if (input.trim().length === 0) {
        return '';
    }

    // Remove leading/trailing spaces
    const trimmed = input.trim();

    // Split by non-alphanumeric characters (except already camelCase patterns)
    const words = trimmed
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase: first word lowercase, rest capitalize first letter
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
console.log(toCamelCase('hello_world'));           // "helloWorld"
console.log(toCamelCase('hello#world'));           // "helloWorld"
console.log(toCamelCase('hello123world'));         // "hello123world"
console.log(toCamelCase('   '));                   // ""
console.log(toCamelCase('HelloWorld'));            // "helloworld"
console.log(toCamelCase('hello-world-test'));      // "helloWorldTest"

try {
    toCamelCase(5);
} catch (error) {
    console.error(error.message);                    // "number cannot be converted to camelCase..."
}

function toDotCase(input) {
    // Validate input is a string
    if (typeof input !== 'string') {
        throw new TypeError(`${typeof input} cannot be converted to dot.case. Expected a string.`);
    }

    // Handle empty strings or strings with only spaces
    if (input.trim().length === 0) {
        return '';
    }

    // Remove leading/trailing spaces
    const trimmed = input.trim();

    // Split by non-alphanumeric characters and convert to lowercase
    const words = trimmed
        .split(/[^a-zA-Z0-9]+/)
        .filter(word => word.length > 0)
        .map(word => word.toLowerCase());

    if (words.length === 0) {
        return '';
    }

    return words.join('.');
}

// Example usage
console.log(toDotCase('hello_world'));           // "hello.world"
console.log(toDotCase('hello#world'));           // "hello.world"
console.log(toDotCase('hello123world'));         // "hello123world"
console.log(toDotCase('   '));                   // ""
console.log(toDotCase('HelloWorld'));            // "hello.world"
console.log(toDotCase('hello-world-test'));      // "hello.world.test"

try {
    toDotCase(5);
} catch (error) {
    console.error(error.message);                  // "number cannot be converted to dot.case..."
}

