
// O(n)
function checkCommon(array1, array2) {
    let a = array1;
    let b = array2;
    let existingInA = new Array(200);
    let existingInB = new Array(200);

    if(array1.length < array2.length){
        a = array2;
        b = array1;
    }

    for(let i = 0; i < a.length; i++){ // O(n)
        const codeInA = a[i].toString().charCodeAt(0); // O(1)
        if(typeof existingInB[codeInA] === 'undefined') {
            existingInA.splice(codeInA, 0, true);  // O(n)
        }else{
            return true;
        }
        if(i < b.length) {
            const codeInB = b[i].toString().charCodeAt(0); // O(1)
            if (typeof existingInA[codeInB] === 'undefined') {
                existingInB.splice(codeInB, 0, true); // O(n)
            } else {
                return true;
            }
        }
    }
    return false;
}

console.log(checkCommon(['a', 'b', 'c', 'x'], ['z', 'y', 'i']));
console.log(checkCommon(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));
console.log(checkCommon(['a', 'd', 'c', 'x'], ['z', 'y', 'l']));
console.log(checkCommon(['a'], []));
console.log(checkCommon([1], [2, 3]));