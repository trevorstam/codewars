# Code Wars Challenge: Indexed Capitalization

## Partners: Trevor Stam & Katherine Smith

https://www.codewars.com/kata/indexed-capitalization

## Problem Domain
- Given a string and an array of integers representing indices, capitalize all letters at the given indices.
- Input = lowercase string with no spaces and array of digits

## Algorithm
- Write a function that takes in a string and an array of numbers
- Split string 
- Loop through split string
- Check if numbers array at index i is less than the length of the input string
- If so, capitalize letters in split string at index of numbers array
- Join the split string and return.
