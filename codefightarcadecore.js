/*
#1
You are given a two-digit integer n. Return the sum of its digits
*/
function addTwoDigits(n) {
    let x = n.toString().split("");
    return parseInt(x[0])+parseInt(x[1]);
   }


/*
#2
Given an integer n, return the largest number that contains exactly n digits.
*/
function largestNumber(n) {
    let x=""
    for(i=0;i<n;i++){
        x+="9";
    }
     return parseInt(x);
 }


/*
#3
n children have got m pieces of candy. They want to eat as much candy
 as they can, but each child must eat exactly the same amount of candy 
 as any other child. Determine how many pieces of candy will be eaten 
 by all the children together. Individual pieces of candy cannot be split
*/
function candies(n, m) {
    let x = m%n;
    return m-x;
}


/*
#4
Your friend advised you to see a new performance in the most popular theater 
in the city. He knows a lot about art and his advice is usually good, but not 
this time: the performance turned out to be awfully dull. It's so bad you want
 to sneak out, which is quite simple, especially since the exit is located 
 right behind your row to the left. All you need to do is climb over your 
 seat and make your way to the exit.

The main problem is your shyness: you're afraid that you'll end up blocking the 
view (even if only for a couple of seconds) of all the people who sit behind you 
and in your column or the columns to your left. To gain some courage, you decide
to calculate the number of such people and see if you can possibly make it to the 
exit without disturbing too many people.

Given the total number of rows and columns in the theater (nRows and nCols, respectively), 
and the row and column you're sitting in, return the number of people who sit strictly behind 
you and in your column or to the left, assuming all seats are occupied.
*/
function seatsInTheater(nCols, nRows, col, row) {
    let x = nCols - col;
    let y = nRows - row;
    return x*y+y;
}


/*
#5
Given a divisor and a bound, find the largest integer N such that:

    N is divisible by divisor.
    N is less than or equal to bound.
    N is greater than 0.

It is guaranteed that such a number exists.
*/
function maxMultiple(divisor, bound) {
    let x = bound%divisor;
    return bound-x;
}


/*
#6
Consider integer numbers from 0 to n - 1 written down along the circle in 
such a way that the distance between any two neighbouring numbers is equal 
(note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber, find the number which is written in the radially 
opposite position to firstNumber.
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
#7
One night you go for a ride on your motorcycle. At 00:00 you start your engine, 
and the built-in timer automatically begins counting the length of your ride, 
in minutes. Off you go to explore the neighborhood.

When you finally decide to head back, you realize there's a chance the bridges 
on your route home are up, leaving you stranded! Unfortunately, you don't have 
your watch on you and don't know what time it is. All you know thanks to the bike's 
timer is that n minutes have passed since 00:00.

Using the bike's timer, calculate the current time. Return an answer as the sum of 
digits that the digital timer in the format hh:mm would show.
*/
function lateRide(n) {
    let hours = Math.floor(n/60);
    let mins = n%60;
    hours = hours.toString().split("");
    mins = mins.toString().split("");
    let x = hours.concat(mins);
    x = x.reduce(function(a,b) {
    return parseInt(a)+parseInt(b);
    });
    return x;
}


/*
#8
Some phone usage rate may be described as follows:

    first minute of a call costs min1 cents,
    each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
    each minute after 10th costs min11 cents.

You have s cents on your account before the call. What is the duration of the longest call 
(in minutes rounded down to the nearest integer) you can have?
*/
function phoneCall(min1, min2_10, min11, s) {
    let min = 0;
    let x = s;
    
    while(x>=0){
        if(min === 0){
            if(x>=min1){
                
                x = x - min1;
                min++;
                console.log(min);
                console.log(x);
            }
            else{
                return min;
            }
        }
        if(min>=1 && min<=9){
            if(x>=min2_10){
                x = x - min2_10;
                min++;
                console.log(min);
                console.log(x);
            }
            else{
                return min;
            }
        }
        if(min >= 10){
            
            if(x >= min11){
               
                x = x - min11;
                min++;
                console.log(min);
                console.log(x);
                console.log(min11)
            }
            else{
            
                return min;
            }
        }
    }
    return min;
}


/*
#9
You are playing an RPG game. Currently your experience points (XP) total is equal to experience. 
To reach the next level your XP should be at least at threshold. If you kill the monster in front 
of you, you will gain more experience points in the amount of the reward.

Given values experience, threshold and reward, check if you reach the next level after killing the monster.
*/
function reachNextLevel(experience, threshold, reward) {
    if(experience + reward >= threshold){
        return true;
    }
    else{
        return false;
    }
}


/*
#10
You found two items in a treasure chest! The first item weighs weight1 
and is worth value1, and the second item weighs weight2 and is worth value2. 
What is the total maximum value of the items you can take with you, assuming
that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of 
each type, i.e. you can't take two first items or two second items.
*/
function knapsackLight(value1, weight1, value2, weight2, maxW) {
    if(weight1 + weight2 <= maxW){
        return value1 + value2;
    }
    if(value1 >= value2 || weight2 > maxW){
        if(weight1 <= maxW){
            return value1;
        }
    }
    if(value2 >= value1 || weight1 > maxW){
        if(weight2 <= maxW){
            return value2;
        }
    }
    
    return 0;

}


/*
#11
You're given three integers, a, b and c. It is guaranteed that two of these 
integers are equal to each other. What is the value of the third integer?
*/
function extraNumber(a, b, c) {
    let z = a+b+c;
    
    if(a == b){
     return z - a - b;
    }
     if(a == c){
     return z - a - c;
    }
     if(c == b){
     return z - c - b;
    }
    
   }


/*
#12
Given integers a and b, determine whether the following pseudocode results in an infinite loop

while a is not equal to b do
  increase a by 1
  decrease b by 1

Assume that the program is executed on a virtual machine which can store arbitrary 
long numbers and execute forever.
*/
function isInfiniteProcess(a, b) {
    if(a>b){
     return true;
    }
    if((b-a)%2 == 0){
     return false;
    }
    else{
     return true;
    }
   }


/*
#13
Consider an arithmetic expression of the form a#b=c. Check whether it is 
possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.
*/
function arithmeticExpression(a, b, c) {
    if(a+b==c){
        return true;
    }
        if(a-b==c){
        return true;
    }
        if(a/b==c){
        return true;
    }
        if(a*b==c){
        return true;
    }
    else{
        return false;
    }
}


/*
#14
In tennis, a set is finished when one of the players wins 6 games and the other one wins 
less than 5, or, if both players win at least 5 games, until one of the players wins 7 games.

Determine if it is possible for a tennis set to be finished with the score score1 : score2.
*/
function tennisSet(score1, score2) {
    if(score1>7 || score2>7){
        return false;
    }
    if(score1==7 && score2==7){
        return false;
    }
    if(score1>6 && score2<5){
        return false;
    }
     if(score2>6 && score1<5){
        return false;
    }
    if(score1 == 7 || score2==7){
        return true;
    }
    if(score1 == 6 && score2 <5){
        return true;
    }
    if(score2 == 6 && score1 <5){
        return true;
    }
    else{
        return false;
    }
}


/*
#15
Once Mary heard a famous song, and a line from it stuck in her head. That line was 
"Will you still love me when I'm no longer young and beautiful?". Mary believes 
that a person is loved if and only if he/she is both young and beautiful, but this 
is quite a depressing thought, so she wants to put her belief to the test.

Knowing whether a person is young, beautiful and loved, find out if they contradict Mary's belief.

A person contradicts Mary's belief if one of the following statements is true:

    they are young and beautiful but not loved;
    they are loved but not young or not beautiful.

*/
function willYou(young, beautiful, loved) {
    if(young === true && beautiful === true && loved === true){
        return false;
    }
    if(young === true && beautiful === true && loved === false){
        return true;
    }
    if(young === false && beautiful === false && loved === false){
        return false;
    }
    if(young === false && beautiful === true && loved === false){
        return false;
    }
    if(young === false || beautiful === false && loved === true){
        return true;
    }
    if(young === true || beautiful === true && loved === false){
        return false;
    }
}


/*
#16
You just bought a public transit card that allows you to ride the Metro for a certain number of days.

Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which 
equals the number of days in January. The second time you pay for the card, your pass is extended 
by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. 
The 13th time you extend the pass, you get 31 days again.

You just ran out of days on the card, and unfortunately you've forgotten how many times your pass
has been extended so far. However, you do remember the number of days you were able to ride the 
Metro during this most recent month. Figure out the number of days by which your pass will now be 
extended, and return all the options as an array sorted in increasing order.

*/
function metroCard(lastNumberOfDays) {
    if(lastNumberOfDays == 31){
        return [28,30,31];
    }
    if(lastNumberOfDays == 30){
        return [31];
    }
    if(lastNumberOfDays == 28){
        return [31];
    }
}


/*
#17
In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent 
to his minions. The message contains several numbers that, when typed into a supercomputer, 
will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

You figured out that some numbers have a modified single digit in their binary representation. 
More specifically, in the given number n the kth bit from the right was initially set to 0, 
but its current value might be different. It's now up to you to write a function that will 
change the kth bit of n back to 0.

*/
function killKthBit(n, k) {
    return n & ~(1 << (k - 1)) ;
  }


/*
#18
You are given an array of up to four non-negative integers, each less than 256.

Your task is to pack these integers into one number M in the following way:

    The first element of the array occupies the first 8 bits of M;
    The second element occupies next 8 bits, and so on.

Return the obtained integer M.

Note: the phrase "first bits of M" refers to the least significant bits of M - the 
right-most bits of an integer. For further clarification see the following example.

*/
function arrayPacking(a) {
    a = a.reverse();
    for(i=0;i<a.length;i++){
        a[i]=("00000000"+a[i].toString(2)).substr(-8);
        console.log(a[i]);
    }
    a = a.join("");
    console.log(a);
    return parseInt(a,2);
}


/*
#19
You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an 
array of all the integers from a to b inclusive. You need to count the number 
of 1s in the binary representations of all the numbers in the array.

*/
function rangeBitCount(a, b) {
    
   let c = 0;
   let x = [];
   for(i=0;i<=b-a;i++){
      let temp = a+i;
      console.log(temp);
      x.push(temp.toString(2));
   }
   x=x.join("");
   for(i=0;i<x.length;i++){
      if(x[i] == "1"){
         c++;
      }
   }
   return c;
}


/*
#20
Reverse the order of the bits in a given integer.

*/
function mirrorBits(a) {
    return parseInt(a.toString(2).split("").reverse().join(""),2); 
   }


/*
#21
Presented with the integer n, find the 0-based position of the second rightmost zero 
bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit.

*/
function secondRightmostZeroBit(n) {
    return -~((n-~(n^(n+1))/2)^(n-~(n^(n+1))/2+1))/2;
  }

