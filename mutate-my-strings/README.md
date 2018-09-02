# Code Wars Challenge: Mutate my String

https://www.codewars.com/kata/mutate-my-strings

## Problem Domain
- You have 2 strings
- Transform string 1 into string 2 one letter at a time
- Only replace character of first string with second string if characters are not the same

## Algorithm
- Write function that takes in two strings as params
- Create variable that takes in the first string. This string is used to set initial value and to concatenate to next line.
- Loop over first string
- Check if the character at position i in both strings are unequal
- Add to variable: the letter at position i + 1 in string 2 and the remaining letters of first string from position i + 1
- Then go to new line and repeat process until all letters of first string are replaced by second string
- Return variable
