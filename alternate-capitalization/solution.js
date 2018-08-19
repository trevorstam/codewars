function capitalize(str) {
    let stringEvenIndex = '';
    let stringOddIndex = '';

    let combinedArray = [];

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            stringEvenIndex += str.charAt(i).toUpperCase();
            stringOddIndex += str.charAt(i).toLowerCase();
        } else {
            stringOddIndex += str.charAt(i).toUpperCase();
            stringEvenIndex += str.charAt(i).toLowerCase();
        }
    }

    combinedArray.push(stringEvenIndex);
    combinedArray.push(stringOddIndex);



    return combinedArray;

};