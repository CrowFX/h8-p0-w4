function checkAB(num) {
    let check = false;
    let a;
    let b;
    let c;
    let d;
    let e;
    let f;
    let index = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < num.length; i++) { // iteration for whole num
        if (check === false) {break;} //break whole loop if check is false
        for (let j = 0; j < index.length; j++) { //iterate to whole index
            a = index[j-1]; // assign all variables to designated index
            b = index[j-2];
            c = index[j-3];
            d = index[j+1];
            e = index[j+2];
            f = index[j+3];
            if (i !== j && (num[i]) == (a || b || c || d || e || f)) {
                check = true;
                break;
            }
            /*while (i !== j) {
                if (num[i] == (a || b || c || d || e || f)) {
                    check = false;
                    break;
                } else {break;}*/
            //}
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