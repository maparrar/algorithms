
// O(n/2)
function reverseString(string) {
    let left = '';
    let mid = string.length % 2 !== 0 ? string[Math.floor(string.length / 2)] : '';
    let right = '';

    for(let i = 0; i < Math.floor(string.length / 2); i++) {
        left += string[string.length - 1 - i];
        right = string[i] + right;
    }

    return left + mid + right;
}

console.log(reverseString('hola'));
console.log(reverseString('ratón'));
console.log(reverseString(''));
console.log(reverseString('abcdefghijklmnopqrstuvwxyz'));
