# codewars
Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.
https://www.codewars.com/kata/insert-dashes

Partnered with: Brai Frauen

Problem domain
1.	Insert number array
2.	Add dash between numbers
3.	Zero is excluded as odd number
4.	According to tests, it should return a string

Algorithm
1.	Write function with number array as parameter
2.	Declare variable, turn number array into string
3.	Split the stringified array with a blank space between each number
4.	Write for loop to loop over each element and each element +1
5.	Add if conditional that checks if the modulus of number array is not zero and if number at iterator is not zero
6.	Add to it that element i+1 meets similar conditions
7.	Add dash in between numbers that meet if conditions with splice method
8.	Increment iterator
9.  Join the array and make sure there are no commas between each number

