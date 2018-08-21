## Nice Array Code Wars Challenge

## Partners: Trevor Stam  & Daniel Frey

https://www.codewars.com/kata/nice-array/train/javascript


## Problem domain

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.
example:
[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements. 

## Algorithm
- Write function isNice that passes in an array
- Loop over the entire array with a for loop.
- create a counter variable that increments when going through loop.
- If array includes i-1 or i+1  of the array return true
- Else false
- If array length is 0 than return false
- Return array
