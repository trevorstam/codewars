function solution(str) {
    let emptyString = '';

    for (let i = str.length - 1; i >= 0; i--) {

        emptyString += str[i];
    }
    return emptyString;

}
