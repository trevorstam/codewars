function mutateMyStrings(stringOne, stringTwo) {
    //this is your initial output and you concatenate on to this with a new line
    let wordTransition = stringOne + '\n';

    for (let i = 0; i < stringOne.length; i++) {
        if (stringOne.charAt(i) !== stringTwo.charAt(i)) {
            //Then you add second string + the remainder of string one
            wordTransition += stringTwo.slice(0, i + 1) + stringOne.slice(i + 1) + '\n';
        }
    }
    return wordTransition;
}