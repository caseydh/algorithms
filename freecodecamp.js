//Basic Algorithm

/* 
#1
Reverse the provided string.
*/
function reverseString(str) {
    return str.split('').reverse().join('');
   }
   
   reverseString("hello");


/* 
#2
Return the factorial of the provided integer.
If the integer is represented with the letter n, a 
factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
*/
function factorialize(n) {
    if(n == 0){
      return 1;
    }
    return n * factorialize(n-1);
  }
  
  factorialize(5);


/* 
#3
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward 
and backward, ignoring punctuation, case, and spacing.
*/
function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }
  palindrome("eye");


/* 
#4
Return the length of the longest word in the provided sentence.
*/
function findLongestWord(str) {
    
      return str.split(" ").reduce(function(a,b){
        return Math.max(a,b.length);
      },0);
    }
    
    findLongestWord("The quick brown fox jumped over the lazy dog");


/* 
#4
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
    var newstr = str.toLowerCase().split(' ');
    var newtitle= [];
    
    for(var l in newstr){
      newtitle[l] = newstr[l].replaceAt(0, newtitle[l].charAt(0).toUpperCase());
      
    } 
     return newtitle.join(' ');
  }
  
  titleCase("I'm a little tea pot");


/* 
#5
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and 
access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
      return arr.map(Function.apply.bind(Math.max, null));
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


/* 
#6
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced 
in ES2015. But for the purpose of this challenge, we would like you to use one of 
the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
    
      return str.substr(-target.length) === target;
    }
    
    confirmEnding("Bastian", "n");


/* 
#7
Repeat a given string (first argument) num times (second argument). 
Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
    if(num > 0){
      return str.repeat(num);
  }
    return "";
  }  
  
  repeatStringNumTimes("abc", 3);


/* 
#8
Truncate a string (first argument) if it is longer than the given maximum string length 
(second argument). Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
*/
function truncateString(str, num) {
    if(str.length > num && num <=3){
      return str.slice(0, num)+"...";
    }
    if(str.length > num){
      return str.slice(0,num-3)+"...";
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 11);


/* 
#9
Write a function that splits an array (first argument) into groups the 
length of size (second argument) and returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
    result = [];
    i = 0;
    while(i < arr.length){
      result.push(arr.slice(i, i+size));
      i += size;
      
    }
    return result;
  }
    
  chunkArrayInGroups(["a", "b", "c", "d"], 2);


/* 
#10
Return the remaining elements of an array after chopping off n elements from the head.
*/
function slasher(arr, howMany) {
    return arr.slice(howMany, arr.length);
  }
  
  slasher([1, 2, 3], 2);


/* 
#11
Return true if the string in the first element of the array contains all 
of the letters of the string in the second element of the array.
*/
function mutation(arr) {
    var chars = arr[1].toLowerCase().split("");
    var temp = arr[0].toLowerCase();
    i = 0;
    while(temp.indexOf(chars[i]) !== -1){
      console.log(chars[i]);
      i++;
      console.log(i);
      
      if(i == chars.length){
        return true;
      }
    }
    return false;
      
  }
  
  mutation(["hello", "hey"]);


/* 
#12
Remove all falsy values from an array.
*/
function bouncer(arr) {
    return arr.filter(Boolean);
 }


bouncer([7, "ate", "", false, 9]);



/* 
#13
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of 
the same value as these arguments.
*/
function destroyer(arr) {
    // Remove all the values
    return arr.filter(function(val){
      return val !== arr[1] && val !== arr[2];
    });
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);



/* 
#14
Return the lowest index at which a value (second argument) should be inserted 
into an array (first argument) once it has been sorted. The returned value should be a number.
*/
function getIndexToIns(arr, num) {
    return arr.concat(num).sort((a,b) => a-b).indexOf(num);
    }
  
  getIndexToIns([10, 20, 30, 40, 50], 35);


/* 
#15
One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters 
are shifted by some set amount.
*/
function rot13(str) {
    // Split str into a character array
    return str.split('')
    // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x);  // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      }).join('');  // Rejoin the array into a string
  }
  rot13("SERR PBQR PNZC");


//Intermediate Algorithms 


/* 
#1
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.
*/
function sumAll(arr) {
    
    var sum = 0;
    var max = arr.reduce(function(a, b) {
      return Math.max(a, b);
    });
    var min = arr.reduce(function(a, b) {
      return Math.min(a, b);
    });
   
    for(i= min; i < max+1; i++){
      sum += i;
    }
    return sum;
  }
  
  sumAll([10 ,5]);



/* 
#2
Compare two arrays and return a new array with any items only 
found in one of the two given arrays, but not both. In other 
words, return the symmetric difference of the two arrays.
*/
function diffArray(arr1, arr2) {
    var newArr = [];
    var arr3 = arr1.concat(arr2);
    
    for(i = 0; i < arr3.length; i++){
      for(j = 0; j <arr3.legnth; j++){
        if(arr3[i] == arr[j] && i != j){
          break;
        }
        if(j == arr3.length-1){
          newArr.push(arr3[i]);
        }
        
      }
    }
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/* 
#3
Convert the given number into a roman numeral.
*/
function convertToRoman(num) {
    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
  
    var romanized = '';
    
    for(i = 0; i < decimalValue.length; i++){
      while(decimalValue[i] <= num){
        romanized += romanNumeral[i];
        num -= decimalValue[i];
      }
    }
    
    
    return romanized;
  }
  
  convertToRoman(36);



/* 
#4
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property and value 
pairs (second argument). Each property and value pair of the source object 
has to be present in the object from the collection if it is to be included in the returned array
*/
function whatIsInAName(collection, source) {
    
     var srcKeys = Object.keys(source);
     
     return collection.filter(function(obj){
       for(var i = 0; i < scrKeys.length; i++){
         
       }
       
     });
   }
   
   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/* 
#5
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
*/
function myReplace(str, before, after) {
    if(before[0]=== before[0].toUpperCase()){
      after = after.replace(after[0],after[0].toUpperCase());
    }
    return str.replace(before, after);
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
  

/* 
#6
Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".
*/
function translatePigLatin(str) {
    var regex = /[aeiou]/gi;
    
    if(str[0].match(regex)){
      str = str+"way";
    }else{
      var x = str.indexOf(str.match(regex)[0]);
       str = str.substr(x) + str.substr(0, x) + 'ay';
  
    }
    return str;
  }
  
  translatePigLatin("consonant");


/* 
#7
The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array
*/
function pairElement(str) {
    var pairs = [];
    for(i=0;i<str.length; i++){
      if(str[i] === "A"){
        pairs.push(["A","T"]);
      }
      if(str[i] === "T"){
        pairs.push(["T","A"]);
      }
      if(str[i] === "G"){
        pairs.push(["G","C"]);
      }
      if(str[i] === "C"){
        pairs.push(["C","G"]);
      }
    }
    return pairs;
  }
  
  pairElement("GCG");


/* 
#8
Find the missing letter in the passed letter range and return it.
*/
function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var len = str.length;
    var start = alphabet.indexOf(str[0]);
    
    for(var i = start; i < start + len; i++){
      if(!str.includes(alphabet[i])){
        return alphabet[i];
      }
    }
    return undefined;
  }
  
  fearNotLetter("abce");


/* 
#9
Check if a value is classified as a boolean primitive. Return true or false.
*/
function booWho(bool) {
    if(typeof(bool) === "number"){
      return false;
    }
    if(bool == true || bool == false){
      return true;
    }else{
    return false;
  }
  }
  
  booWho(null);


/* 
#10
Write a function that takes two or more arrays and returns a new array 
of unique values in the order of the original provided arrays
*/
function uniteUnique() {
    var temparr = [];
    var i = 0;
    while(arguments[i]){
      temparr = temparr.concat(arguments[i]);
      i++;
    }
    arr = temparr.filter(function(x, y){
      return temparr.indexOf(x) == y;
      
    });
    return arr;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/* 
#11
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/
function convertHTML(str) {
    
      var temp = str.split('');
    
      for (var i = 0; i < temp.length; i++) {
        switch (temp[i]) {
          case '<':
            temp[i] = '&lt;';
            break;
          case '&':
            temp[i] = '&amp;';
            break;
          case '>':
            temp[i] = '&gt;';
            break;
          case '"':
            temp[i] = '&quot;';
            break;
          case "'":
            temp[i] = "&apos;";
            break;
        }
      }
    
      temp = temp.join('');
      return temp;
    }
    
    
    convertHTML("Dolce & Gabbana");


/* 
#12
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes..
*/
function spinalCase(str) {
    str = str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
    return str;
  }
  
  spinalCase('This Is Spinal Tap');


/* 
#13
Given a positive integer num, return the sum of all odd Fibonacci numbers 
that are less than or equal to num.The first two numbers in the Fibonacci 
sequence are 1 and 1. Every additional number in the sequence is the sum 
of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/
function sumFibs(num) {
    var sum = 0;
    var fib = 1;
    var back = 0;
    var temp = 0;
    for(i=0;i<num;i++){
       
      if(fib%2 !== 0 && fib <= num){
         sum += fib;
       }
      temp = fib;
      fib = back + fib;
      back = temp;
    }
    return sum;
  }
  
  sumFibs(1000);


/* 
#14
Sum all the prime numbers up to and including the provided number.
*/
function sumPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
   var sum = primes.reduce(function(a, b) { return a + b; }, 0);
   return sum;
}

sumPrimes(10);


/* 
#15
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as 
well as by all sequential numbers in the range between these parameters.
*/
function smallestCommons(arr) {
    function isValidMultiple(m, min, max) {
      for (var i = min; i < max; i++) {
        if (m % i !== 0) {
          return false;
        }
      }
      
      return true;
    }
    
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var multiple = max;
    
    while (!isValidMultiple(multiple, min, max)) {
      multiple += max;
    }
    
    return multiple;
  }


/* 
#16
Create a function that looks through an array (first argument) and returns the first 
element in the array that passes a truth test (second argument).
*/
function findElement(arr, func) {
    
    var num = arr.filter(func);
     return num[0];
  }
  
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/* 
#17
Drop the elements of an array (first argument), starting from the 
front, until the predicate (second argument) returns true.
*/
function dropElements(arr, func) {
    var length = arr.length;
    for(i=0; i<length;i++){
      if(func(arr[0])){
       break;
      }else{
        arr.shift();
      }
    }
    return arr;
  }
  
  dropElements([1, 2, 3, 9, 2], function(n) {return n < 3; });
  

/* 
#18
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
    var flat = [].concat(...arr);
    if(flat.some(Array.isArray)){
      return steamrollArray(flat);
    }else{
    return flat;
  }
  }
  steamrollArray([1, [2], [3, [[4]]]]);


/* 
#19
Return an English translated sentence of the passed binary string.
*/
function binaryAgent(str) {
    var string = str.split(" ");
    string = string.map(function(x){
     return String.fromCharCode(parseInt(x,2));  
    });
    return string.join("");
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
  

/* 
#20
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
*/
function truthCheck(collection, pre) {
    return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"},
{"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}], "sex");


/* 
#21
Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum..
*/
function addTogether() {
    var args = Array.from(arguments);
    var a = args[0];
    var b = args[1];
    if(Number.isInteger(a) && Number.isInteger(b)){
      return a + b;
    }if(!b && Number.isInteger(a)){
      return function(b) {
          if (Number.isInteger(b))
            return a + b;
        };
    }
    else{
      return undefined;
    }
  }
  
  addTogether(2,3);


//Advanced Algorithms

/* 
#1
Return true if the passed string is a valid US phone number.
*/
function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  
  
  
  telephoneCheck("555-555-5555");


/* 
#2
You are given a JSON object representing a part of your musical album collection. 
Each album has several properties and a unique id number as its key. Not all albums 
have complete information.

Write a function which takes an album's id (like 2548), a property prop (like "artist" or "tracks"), 
and a value (like "Addicted to Love") to modify the data in this collection.
*/
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop === "tracks" && value !== ""){
    if(collection[id][prop]){
      collection[id][prop].push(value);
    }else{
      collection[id][prop] = [value];
   }
  }else if(value !==""){
    collection[id][prop] = value;
  }else{
    delete collection[id][prop];
  }
  
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");


/* 
#3
Create a function that takes two or more arrays and returns an array of 
the symmetric difference (△ or ⊕) of the provided arrays.
*/
function sym() {
    var args = Array.from(arguments);
     console.log(args);   
    return args.reduce(dif);
  }
    function dif(arr1,arr2){
      var vals=[];
      arr1.forEach(function(i){
        if(arr2.indexOf(i)<0 && vals.indexOf(i)<0){
          vals.push(i);
        }
      });
      arr2.forEach(function(i){
        if(arr1.indexOf(i)<0 && vals.indexOf(i)<0){
          vals.push(i);            
    }
    });
      return vals;
  }
  sym([1, 2, 3], [5, 2, 1, 4]);


/* 
#4
Design a cash register drawer function checkCashRegister() that accepts purchase price as the 
first argument (price), 
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. 
Return the string "Closed" if cash-in-drawer is equal to the change due.
*/
var money = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];
  function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var sum = cid.reduce(function(a,b){
      return a + b[1];
    },0.0).toFixed(2);
    
    if(sum < change){
       return "Insufficient Funds"; 
     }
     if(sum == change){
       return "Closed"; 
     }
    cid = cid.reverse();
    var changeArr = money.reduce(function(acc, next, index){
      if(change >= next.val){
        var current = 0.0;
        while(change >= next.val && cid[index][1] >= next.val){
          current += next.val;
          change -= next.val;
          change = Math.round(change * 100)/100;
          cid[index][1] -= next.val;
        }
        acc.push([next.name, current]);
        return acc;
      }else{
        return acc;
      }
    },[]);
    
    return changeArr.length > 0 && change === 0 ? changeArr :"Insufficient Funds";
  }
  checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
  

/* 
#5
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item 
and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item.
*/
function updateInventory(arr1, arr2) {
    var count;
    arr2.forEach(function(item){
      count = 0;
      arr1.forEach(function(index){
        if(item[1]===index[1]){
          index[0] += item[0];
          count +=1;
          
        }
      });
      if (count === 0){
        arr1.push(item);
      }
    });
    arr1.sort(function(a, b){
    if(a[1] < b[1]) return -1;
    if(a[1] > b[1]) return 1;
    return 0;
  });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


/* 
#6
Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.
*/
function permAlone(str) {
    var arr = str.split("");
    var counter = 0;
    var n = str.length;
    
    function swap(a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
    function generate(n){
     if(n === 1 && !/([a-z])\1+/.test(arr.join(""))){
       counter++;
     }
      else{
        for(var i=0;i<n;i++){
          generate(n-1);
          swap(n % 2 ? 0 : i, n - 1);
        }
      }
  }
  generate(arr.length);
  return counter;
  }
  
  
  permAlone('aab');
  

/* 
#7
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.
*/
var Person = function(firstAndLast) {
    var arr = firstAndLast.split(" ");
     
   this.getFirstName = function(){
     return arr[0];
   };
   this.getLastName = function(){
     return arr[1];
   };
   this.getFullName = function() {
     return arr.join(" ");
   };
   this.setFirstName = function(first){
     arr[0] = first;
   };
    this.setLastName = function(last){
     arr[1] = last;
   };
    this.setFullName = function(firstAndLast){
     var temp = firstAndLast.split(" ");
     arr[0] = temp[0];
     arr[1] = temp[1];
   };
     return firstAndLast;
 };
 
 var bob = new Person('Bob Ross');


/* 
#8
Return a new array that transforms the element's average altitude into their orbital periods.
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
*/
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for(var i=0;i<arr.length;i++){
      var temp = arr[i].avgAlt;
      delete arr[i].avgAlt;
      arr[i].orbitalPeriod = Math.round(2*Math.PI*(Math.sqrt(Math.pow(temp+earthRadius, 3)/GM)));
    }
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


/* 
#9
Given an array arr, find element pairs whose sum equal the second argument arg and return 
the sum of their indices.
If multiple pairs are possible that have the same numeric elements but different indices, 
return the smallest sum of indices. 
Once an element has been used, it cannot be reused to pair with another.
*/
function pairwise(arr, arg) {
    var total = 0;
    var index = [];
    for(var i = 0;i<arr.length-1;i++){
      for(var j=i+1; j<arr.length;j++){
        if(arr[i]+arr[j] === arg && index.indexOf(i)==-1 && index.indexOf(j)==-1){
          index.push(j);
          index.push(i);
          total += i;
          total += j;
        }
      }
    }
    return total;
  }
  
  pairwise([1, 1, 1], 2);


