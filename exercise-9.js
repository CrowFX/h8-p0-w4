function checkAB(num) {
    let check = false;
    for (let i = 0; i < num.length; i ++) {
        if (num[i] === 'a') {
            if ((num[i-4] || num[i+4]) === 'b') {
                check = true;
                break;
            }
        }
        if (num[i] === 'b') {
            if ((num[i-4] || num[i+4]) === 'a') {
                check = true;
                break;
            }
        }
    } 
    return check;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false