/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

var sumOfArray = function (arr) {
	var total = 0
	for (var i=0; i<arr.length; i++) {
	total = total + arr[i]
	}
	return total 
}

console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function(arr) {
    var max = arr[0] 
    for (var i=0; i < arr.length; i++) {
        if (max < arr[i]) {
        max = arr[i]
     }
    }
    return max
}

console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
//console.assert(isNaN(maxOfArray([1,2,'bucklemyshoe'])))
/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(symbol) {
    var vowels = ["a","A","e", "E","i", "I","o", "O", "u", "U"]
    for (var i=0; i<vowels.length; i++) {
        var element = vowels[i]
        if (symbol === element) {
            return true
        }
    }
    return false 
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
var reverse = function (string) {
	var newString = ""
	for (var i = string.length - 1; i >= 0; i--) {
		var element = string[i] 
		newString = newString + element 
        
	}
    return newString 
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "fizzbuzz"
 */

var fizzbuzz = function(initial) {
    var string = ""
	while (1 <= initial ) {
    	if ((initial % 5 !== 0) && (initial % 3 !== 0)){
            var x = "."
            string = x + string 
        }
         else if (initial % 3 === 0) {
            var x = "fizz"
            string = x + string 
        }
        else if (initial % 5 === 0) {
            var x = "buzz"
            string = x + string 
        }
        else if ((initial % 5 === 0) && (initial % 3 === 0)) {
            var x = "fizzbuzz"
            string = x + string 
        }
         initial = initial - 1
    }
    	return string 
}
	

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */
var contains = function(sequence,element) {
    if (sequence.indexOf(element) === -1) {
        return false
    }
        return true 
}

function findLongestWord(sentence){
    var sentenceString = sentence.split(" ")
    var alphabet = "qwertyuiopasdfghjklzxcvbnm 1234567890"
    var longestWord = ""
    for (var i = 0; i < sentenceString.length; i ++) {
        var element = sentenceString[i]
    	if (longestWord.length < element.length) {
    		longestWord = element
            }
    	}
    }
    return longestWord
}


console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("dont mess with Texas") === "Texas")



/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */
var gcd = function (num1, num2) {
    if (num1 > num2) {
        var bigNum = num1 
        var smallNum = num2 
    }
    else if (num2 > num1) {
        var bigNum = num2
        var smallNum = num1 
    }
    else if (num1 === num2) {
        return num1
    }
    var x = bigNum % smallNum
    while (x !== 0) {
        bigNum = smallNum 
        smallNum = x
        x = bigNum % smallNum 
    }
    return smallNum
}



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);


//LCM Example:
var lcm = function(num1,num2) {
    var multiple = num2 
    while(true) {
        if (multiple % num1 === 0) {
            return multiple 
        } 
        multiple += num2 
    }
}




