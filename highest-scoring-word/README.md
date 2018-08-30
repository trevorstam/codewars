# CodeWars Challenge : Highest Scoring Word

## Partners: Trevor Stam and Katherine Smith

https://www.codewars.com/kata/highest-scoring-word

## Problem Domain

- Given a string of words, find the highest scoring word.
- Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
- Return highest scoring word as a string.
- If two words score the same, return the word that appears earliest in the original string.
- All letters will be lowercase and all inputs will be valid.

## Algorithm

- Write function that passes in string
- Turn string into array
- Map over array and split
- Then reduce each word into its value
- Find index of highest value
- Return first array at index