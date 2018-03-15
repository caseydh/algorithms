/*
#1
For param1 = 1 and param2 = 2, the output should be
add(param1, param2) = 3
*/
function add(param1, param2) {
    return param1 + param2;
   }

/*
#2
Given a year, return the century it is in. 
The first century spans from the year 1 up to and including the year 100, the second - 
from the year 101 up to and including the year 200, etc.
*/
function centuryFromYear(year) {
    if(year%100 === 0){
     return Math.floor(year/100);
    }else{
     return Math.floor(year/100)+1;
    }
   }

/*
#3
Given the string, check if it is a palindrome.
*/
function checkPalindrome(inputString) {
    temp = inputString.split("");
    temp = temp.reverse();
    temp = temp.join("");
    if(inputString == temp){
        return true;
    }else{
        return false;
    }
}

/*
#4
Given an array of integers, 
find the pair of adjacent elements that has the largest product and return that product.
*/
function adjacentElementsProduct(inputArray) {
    let i=0;
    let j=1;
    temp = [];
    while(j<inputArray.length){
       temp.push(inputArray[i]*inputArray[j]);
       i++;
       j++;
    }
       temp.sort(function(a,b){
          return a - b;
       });
       return temp[temp.length-1];
    }


/*
#5
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. 
An n-interesting polygon is obtained by taking the n - 1-interesting polygon and 
appending 1-interesting polygons to its rim, side by side. 
You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
*/
function shapeArea(n) {
    return 1+2*n*(n-1);
}


/*
#6
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
each statue having an non-negative integer size. Since he likes to make things perfect, 
he wants to arrange them from smallest to largest so that each statue will be bigger 
than the previous one exactly by 1. He may need some additional statues to be able to 
accomplish that. Help him figure out the minimum number of additional statues needed.
*/
function makeArrayConsecutive2(statues) {
    statues.sort(function(a,b){
       return a-b; 
    });
   range = statues[statues.length-1]-statues[0]+1;
   return range - statues.length;
}

/*
#7
Given a sequence of integers as an array, determine whether it is possible to 
obtain a strictly increasing sequence by removing no more than one element from the array.
*/
function almostIncreasingSequence(sequence) {
    var count = 0;
    for(i=1; i<sequence.length;i++){
      if(sequence[i] <= sequence[i-1]){
        count ++;
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <=sequence[i-1]){
          return false;
        }
      }
    }
    
    return count <= 1;
  }

/*
#8
After they became famous, the CodeBots all decided to move to a new building and live together. 
The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an 
integer that represents the price of the room. Some rooms are free (their cost is 0), but that's 
probably because they are haunted, so all the bots are afraid of them. That is why any room that 
is free or is located anywhere below a free room in the same column is not considered suitable for 
the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.
*/
function matrixElementsSum(matrix) {
    var total = 0;
    var haunted = [];
    for(i=0;i<matrix.length; i++){
        for(j=0;j<matrix[i].length;j++){
            if(i == 0){
                total += matrix[i][j];
                if(matrix[i][j] == 0){
                    haunted.push(j);
                }
            }
            
            if(i>0){
                if(matrix[i-1][j] !== 0 && haunted.indexOf(j) < 0){
                    total += matrix[i][j];
                }
            }
        }
    }
        return total;
    }


/*
#9
Given an array of strings, return another array containing all of its longest strings.
*/
function allLongestStrings(inputArray) {
    var arr = [];
    var max = 0;
    for(i=0;i<inputArray.length;i++){
    if(inputArray[i].length > max){
        max = inputArray[i].length;
        }
    }
    console.log(max);
    for(j=0;j<inputArray.length;j++){
        if(inputArray[j].length == max){
            arr.push(inputArray[j]);
        }
    }
    return arr;
    }


/*
#10
Given two strings, find the number of common characters between them.
*/
function commonCharacterCount(s1, s2) {
    var count = 0;
    s1 = s1.split("");
    s2 = s2.split("");
    
    s1Object = {};
    s2Object = {};
    
    for(i=0; i<s1.length;i++){
        if(s1Object.hasOwnProperty(s1[i]) === false){
            s1Object[s1[i]] = 1;
        }
        else{
            s1Object[s1[i]]++;
        }
    }
    for(i=0; i<s2.length;i++){
        if(s2Object.hasOwnProperty(s2[i]) === false){
            s2Object[s2[i]] = 1;
        }
        else{
            s2Object[s2[i]]++;
        }
    }
    for(var prop in s1Object){
        if(s2Object.hasOwnProperty(prop) === true){
            if(s1Object[prop] > s2Object[prop]){
                count += s2Object[prop];
            }
            else{
               count += s1Object[prop]; 
            }
        }
    }
    return count;
}

/*
#11
Ticket numbers usually consist of an even number of digits. A ticket number 
is considered lucky if the sum of the first half of the digits is equal to 
the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/
function isLucky(n) {
    n = n.toString().split("");
    var x = n.length/2;
    var y = n.splice(0,x);
    n = n.reduce(function(a,b){
     return parseInt(a)+parseInt(b);
    });
    y = y.reduce(function(a,b){
    return parseInt(a)+parseInt(b);
    });
    return n == y;
  }

/*
#12
Some people are standing in a row in a park. There are trees 
between them which cannot be moved. Your task is to rearrange 
the people by their heights in a non-descending order without moving the trees.
*/
function sortByHeight(a) {
    array2 = a.filter(function(element){
        if(element > 0){
            return element;
        }
    });
    array2 =array2.sort(function(a,b){
        return a-b;
    });
    var index = 0;
    for(i=0;i<a.length;i++){
        if(a[i] != -1){
            a[i] = array2[index];
            index++;
        }
    }
    return a;
}


/*
#13
You have a string s that consists of English letters, punctuation marks, 
whitespace characters, and brackets. It is guaranteed that the parentheses
in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, 
starting from the innermost pair. The results string should not contain any parentheses.
*/
function reverseParentheses(s) {
    if(s.includes("(")){
       return reverseParentheses(reverseFilter(s));
       }
     return s;
 }
 
 function reverseFilter(s){
    var regex = /\(([^()]*)\)/i;
    var substr = regex.exec(s)[1];
    substr = substr.split("").reverse().join("");
    return s.replace(regex, substr);
 }


 /*
#14
Several people are standing in a row and need to be divided into two teams. 
The first person goes into team 1, the second goes into team 2, the third goes 
into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. 
Return an array of two integers, where the first element is the total weight 
of team 1, and the second element is the total weight of team 2 after the division is complete.
*/
function alternatingSums(a) {
    var sum1 = 0;
    var sum2 = 0;
    var weights = [sum2, sum1];
    for(i=0;i<a.length;i++){
        if(i%2 !==0){
            sum1 += a[i];
        }
        else{
            sum2 +=a [i];
        }
    }
    var weights = [sum2, sum1];
    return weights;

}

 /*
#15
Given a rectangular matrix of characters, add a border of asterisks(*) to it.
*/
function addBorder(picture) {
    var length1 = picture[0].length + 2;
    var border = "";
    for(i=0; i<length1;i++){
        border = border.concat("*");
    }
    picture.unshift(border);
    picture.push(border);
   
    for(var j=1; j< picture.length -1;j++){
        picture[j] = "*".concat(picture[j],"*");
    }
    return picture;
}

 /*
#16
Two arrays are called similar if one can be obtained from another by 
swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.
*/
function areSimilar(a, b) {
    if(a.toString() === b.toString()){
        return true;
    }
    var A = [];
    var B = [];
    for(i=0;i<a.length;i++){
        if(a[i] !== b[i]){
            A.push(a[i]);
            B.push(b[i]);
            
            }
        }
    A = A.sort();
    B = B.sort();
    console.log(A);
    console.log(B);
   if(A.length > 2 || B.length > 2){
       return false;
   }
    if(A.length <= 2 && B.length <= 2){
        if(A.sort().toString() === B.sort().toString()){
        return true;
    }
        return false;
    }
}


/*
#17
You are given an array of integers. On each move you are allowed to increase 
exactly one of its element by one. Find the minimal number of moves required 
to obtain a strictly increasing sequence from the input.
*/
function arrayChange(inputArray) {
    var moves = 0;
        for(var i = 0; i<inputArray.length; i++){
            if(inputArray[i]>=inputArray[i+1]){
                var sum = inputArray[i]+1-inputArray[i+1];
                moves += sum;
                inputArray[i+1] = inputArray[i]+1;
            }
        }
        return moves;
    }


/*
#18
Given a string, find out if its characters can be rearranged to form a palindrome.
*/
function palindromeRearranging(inputString) {
    var str = inputString.split("");
    console.log(str[3]);
    var obj ={};
    for(i=0;i<str.length;i++){
        if(! obj.hasOwnProperty(str[i])){
            obj[str[i]] = 1;
        }
        else{
            obj[str[i]]++;
        }
    }
    var odd = 0;
    for(prop in obj){
    if(obj[prop]%2 !== 0){
        odd++;
    }    
    }
    console.log(odd);
    return odd <= 1;
    
}


/*
#19
Call two arms equally strong if the heaviest weights they each are able to lift are equal.
Call two people equally strong if their strongest arms are equally strong 
(the strongest arm can be both the right and the left), and so are their weakest arms.

Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
*/
function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourLeft === friendsLeft || yourLeft=== friendsRight){
        if(yourRight === friendsLeft || yourRight=== friendsRight){
            if(yourRight+yourLeft === friendsRight+friendsLeft){
                return true;
            }
        }
    }  
            return false;
    }

/*
#20
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
*/
function arrayMaximalAdjacentDifference(inputArray) {
    var max = 0;
        for(i=0; i<inputArray.length;i++){
            if(Math.abs(inputArray[i]-inputArray[i+1])>max){
                max = Math.abs(inputArray[i]-inputArray[i+1]);
            }
        }
        return max;
    }


/*
#21
An IP address is a numerical label assigned to each device (e.g., computer, printer) 
participating in a computer network that uses the Internet Protocol for communication. 
There are two versions of the Internet protocol, and thus two versions of addresses. 
One of them is the IPv4 address.

IPv4 addresses are represented in dot-decimal notation, which consists of four decimal 
numbers, each ranging from 0 to 255 inclusive, separated by dots, e.g., 172.16.254.1.

Given a string, find out if it satisfies the IPv4 address naming rules.
*/
function isIPv4Address(inputString) {
    var regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return regex.test(inputString);
    }

/*
#22
You are given an array of integers representing coordinates of obstacles situated on a straight line.

Assume that you are jumping from the point with coordinate 0 to the right. 
You are allowed only to make jumps of the same length represented by some integer.

Find the minimal length of the jump enough to avoid all the obstacles.
*/
function avoidObstacles(inputArray) {
    for(i=1;i<=40;i++){
        var count = 0;
        for(j=0;j<inputArray.length;j++){
            if(inputArray[j]%i !== 0){
                count++;
            }
        }
        if(count === inputArray.length){
            return i;
        }
    }
        return false;
    }

/*
#23
Last night you partied a little too hard. Now there's a black and white photo 
of you that's about to go viral! You can't let this ruin your reputation, so 
you want to apply the box blur algorithm to the photo to hide its content.

The pixels in the input image are represented as integers. The algorithm distorts 
the input image in the following way: Every pixel x in the output image has a 
value equal to the average value of the pixel values from the 3 × 3 square that 
has its center at x, including x itself. All the pixels on the border of x are then removed.

Return the blurred image as an integer, with the fractions rounded down.
*/
function boxBlur(image) {
    let imageArray =[];
        for(y=0; y<image.length-2; y++){
            let line = [];
            for(x = 0; x<image[y].length-2;x++){
                let sum = 0;
                for(a = y; a<y+3;a++){
                    for(b = x; b<x+3; b++){
                        sum +=image[a][b];
                    }
                }
                line.push(Math.floor(sum/9));
            }
            imageArray.push(line);
        }
        return imageArray;
    }

/*
#24
In the popular Minesweeper game you have a board with some mines and those cells that 
don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
Starting off with some arrangement of mines we want to create a Minesweeper game setup.
*/
function minesweeper(matrix) {
    let sweepergrid = [];
    for(i=0;i<matrix.length;i++){
       sweepergrid.push([]);
        for(j=0;j<matrix[i].length;j++){
            sweepergrid[i][j]=0;
            
            //above
            if(matrix[i-1] != undefined){
                if(matrix[i-1][j] == true){
                    sweepergrid[i][j]++;
                }
            }
            //top right
            if(matrix[i-1] != undefined){
                if(matrix[i-1][j+1] == true){
                    sweepergrid[i][j]++;
                }
            }
            //top left
            if(matrix[i+1] != undefined){
                if(matrix[i+1][j-1] == true){
                    sweepergrid[i][j]++;
                }
            }
            //right
            if(matrix[i][j+1] != undefined){
                if(matrix[i][j+1] == true){
                    sweepergrid[i][j]++;
                }
            }
            //left
            if(matrix[i][j-1] != undefined){
                if(matrix[i][j-1] == true){
                    sweepergrid[i][j]++;
                }
            }
            //below
            if(matrix[i+1] != undefined){
                if(matrix[i+1][j] == true){
                    sweepergrid[i][j]++;
                }
            }
            //below right
            if(matrix[i+1] != undefined){
                if(matrix[i+1][j+1] == true){
                    sweepergrid[i][j]++;
                }
            }
            //below left
            if(matrix[i-1] != undefined){
                if(matrix[i-1][j-1] == true){
                    sweepergrid[i][j]++;
                }
            }
        }
    }
    return sweepergrid;

}


/*
#25
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
*/
function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for(i=0;i<inputArray.length;i++){
        if(inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

/*
#26
Check if all digits of the given integer are even.
*/
function evenDigitsOnly(n) {
    let x =n.toString();
    x.split('');
    console.log(x);
    for(i=0;i<x.length;i++){
        if(x[i] % 2 != 0){
            return false;
        }
    }
    return true;
}

/*
#27
Correct variable names consist only of English letters, digits and underscores 
and they can't start with a digit.

Check if the given string is a correct variable name.
*/
function variableName(name) {
    let result = /^[a-z^_]{1}[a-zA-Z0-9_]*$/.test(name);
    return result;
   }


/*
#28
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
*/
function alphabeticShift(inputString) {
    var anum={
            a: 'b', b: 'c', c: 'd', d: 'e', e: 'f', f: 'g', g: 'h', h: 'i', i: 'j', j: 'k', k: 'l', 
            l: 'm', m: 'n', n: 'o',o: 'p', p: 'q', q: 'r', r: 's', s: 't', t: 'u', 
            u: 'v', v: 'w', w: 'x', x: 'y', y: 'z', z: 'a'
        }
       let x = inputString.split("");
        
       let  z = x.map(function(y) {
          return y = anum[y];
        });
        
        return  z.join("");
    }

/*
#29
Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).
*/
function chessBoardCellColor(cell1, cell2) {
    let a = getPos(cell1);
    let b = getPos(cell2);
    if(a == b){
        return true;
    }
    else{
        return false;
    }
}
function getPos(x){
    let nums = {
        A:1, B:2, C:3, D:4, E:5, F:6, G:7, H:8
    }
    let y = x.split("");
   
    let a = nums[y[0]];
    let b = y[1];
    
    
    if(a%2 === b%2){
        return 1;
    }
    else{
        return 0;
    }
}


/*
#30
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that 
the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.
*/
function circleOfNumbers(n, firstNumber) {
    let x = 360/n;
    let y = 180/x;
    let z = y + firstNumber;
    console.log(z);
    if(z == n){
     return 0;
    }
    if(z > n){
     return firstNumber - n + y;
    }
    else{
     return z;
    }
   }


/*
#31
You have deposited a specific amount of dollars into your bank account. Each year 
your balance increases at the same growth rate. Find out how long it would take for 
your balance to pass a specific threshold with the assumption that you don't make any additional deposits.
*/
function depositProfit(deposit, rate, threshold) {
    let x = threshold/deposit;
    let y = (rate/100)+1;
    
    return Math.ceil(Math.log(x)/Math.log(y));
};