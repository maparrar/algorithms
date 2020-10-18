const numericMatrix = (from = 1, to = 9, numbersPerRow = 3) => {
    let array = [];
    for( let i = 0; i < (to - from + 1); i++ ){
        const row = Math.floor(i/numbersPerRow);
        const col = i%numbersPerRow;
        if(col === 0) array.push(new Array());
        array[row].push({value: from + i, label: (from + i).toString()});
    }
    return array;
}

console.log('(1, 1)', numericMatrix(1, 1));
console.log('(1, 2)', numericMatrix(1, 2));
console.log('(1, 3)', numericMatrix(1, 3));
console.log('(1, 4)', numericMatrix(1, 4));
console.log('(1, 5)', numericMatrix(1, 5));
console.log('(1, 6)', numericMatrix(1, 6));
console.log('(1, 7)', numericMatrix(1, 7));
console.log('(1, 8)', numericMatrix(1, 8));
console.log('(1, 9)', numericMatrix(1, 9));
console.log('(1, 10)', numericMatrix(1, 10));
console.log('(2, 11)', numericMatrix(2, 11));
console.log('(5, 15)', numericMatrix(5, 15, 4));