function insertDash(num) {
    let numberArray = String(num).split(''); //split on space

    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 !== 0 && numberArray[i + 1] % 2 !== 0) {
            numberArray.splice(i + 1, 0, '-') //adds the dash before i + 1
            i++
            //this doesn't pass all the tests in Codewars.
            //I need to remove the dashes at the end of the array
        }
        // removes the dash behind the last number
        if (numberArray[numberArray.length - 1] === '-') {
            numberArray.pop();
        }

    }
    // put split array back together with join
    return numberArray.join(''); //one space
}