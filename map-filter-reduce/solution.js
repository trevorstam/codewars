//Double function using .map
function double(array) {
    const map = array.map(x => x * 2);
    return map;
}

// List Filtering
function filter_list(l) {
    const result = l.filter(listElement => typeof listElement === 'number');
    return result;
}


//Calculate average
function find_average(array) {
    const avg = array.reduce((acc, curr) => acc + curr) / array.length;

    return avg;
}