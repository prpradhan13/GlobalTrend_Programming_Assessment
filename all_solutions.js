/* 1. Write a function that prints the numbers from 1 to 100. 
      But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". 
      For numbers that are multiples of both three and five, print "FizzBuzz". 
*/
// ================= ANSWER =================
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();


/* 2. Write a function that takes a string input representing a simple arithmetic expression 
    (only addition and subtraction) and returns the result.
*/
// ================= ANSWER =================
function evaluateExpression(expression) {
    expression = expression.replace(/\s+/g, '');
    let result = 0;
    let currentNumber = '';
    let currentSign = 1;

    for (let char of expression) {
        if (char === '+' || char === '-') {
            result += currentSign * Number(currentNumber);
            currentNumber = '';
            currentSign = char === '+' ? 1 : -1;
        } else {
            currentNumber += char;
        }
    }

    result += currentSign * Number(currentNumber);

    return result;
}

// Example usage:
console.log(evaluateExpression("3 + 5 - 2")); // Output: 6
console.log(evaluateExpression("10 - 3 + 4")); // Output: 11
console.log(evaluateExpression("1 + 1 + 1 - 1")); // Output: 2


/* 3. Write a function that takes a nested array and returns a flattened array. */
// ================= ANSWER =================
function flattenArray(nestedArray) {
    let flattened = [];

    function flatten(item) {
        if (Array.isArray(item)) {
            for (let element of item) {
                flatten(element);
            }
        } else {
            flattened.push(item);
        }
    }
    flatten(nestedArray);

    return flattened;
}

// Example usage:
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
console.log(flattenArray([[1, 2, [3]], 4, [5, [6, 7]]])); // Output: [1, 2, 3, 4, 5, 6, 7]


/* 4. Write a function that checks if two given strings are anagrams of each other. */
// ================= ANSWER =================
function areAnagrams(str1, str2) {
    str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
    str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("triangle", "integral")); // Output: true
console.log(areAnagrams("apple", "pale")); // Output: false


// /* 5. Write a function that takes an array and returns a new array with duplicates removed. */
// // ================= ANSWER =================
function removeDuplicates(array) {
    const uniqueValues = new Set(array);
    return [...uniqueValues];
}

// Example usage:
console.log(removeDuplicates([1, 2, 3, 1, 2, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'd', 'b'])); // Output: ['a', 'b', 'c', 'd']
console.log(removeDuplicates([true, false, true, false, true])); // Output: [true, false]


// /* 6. Write a function that takes a string and capitalizes the first letter of each word in the string. */
// // ================= ANSWER =================
function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(' ');

    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    });

    return capitalizedWords.join(' ');
}

// Example usage:
console.log(capitalizeFirstLetterOfEachWord("hello world")); // Output: "Hello World"
console.log(capitalizeFirstLetterOfEachWord("this is a test")); // Output: "This Is A Test"
console.log(capitalizeFirstLetterOfEachWord("capitalize the first letter")); // Output: "Capitalize The First Letter"


// /* 7. Write a function that generates the first n numbers of the Fibonacci sequence. */
// // ================= ANSWER =================
function generateFibonacci(n) {
    const fibonacci = [];
    
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibonacci.push(0); // First Fibonacci number
        } else if (i === 1) {
            fibonacci.push(1); // Second Fibonacci number
        } else {
            const nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(nextNumber);
        }
    }
    
    return fibonacci;
}

// Example usage:
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// /* 8. Implement a simple HashMap class with put, get, and remove methods. */
// // ================= ANSWER =================
class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
            return true;
        }
        return false;
    }
}

// Example usage:
const myHashMap = new HashMap();
myHashMap.put('name', 'Alice');
console.log(myHashMap.get('name')); // Output: 'Alice'
myHashMap.remove('name');
console.log(myHashMap.get('name')); // Output: undefined


// /* 9. Write a function that filters out even numbers from an array. */
// // ================= ANSWER =================
function filterOutEvenNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}

// Example usage:
console.log(filterOutEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [1, 3, 5]
console.log(filterOutEvenNumbers([10, 15, 20, 25, 30])); // Output: [15, 25]
console.log(filterOutEvenNumbers([0, -1, -2, -3, -4])); // Output: [-1, -3]


// /* 10. Write a function that converts a given string to title case (capitalizing the first letter of each word). */
// // ================= ANSWER =================
function toTitleCase(str) {
    return str.split(' ').map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        return word;
    }).join(' ');
}

// Example usage:
console.log(toTitleCase("hello world")); // Output: "Hello World"
console.log(toTitleCase("javascript is fun")); // Output: "Javascript Is Fun"
console.log(toTitleCase("this is a test")); // Output: "This Is A Test"
