function fpb(angka1, angka2) {
    let isPrimeOne = true;
    let isPrimeTwo = true;
    for (let i = 2; i < angka1; i++) {
        if (angka1 % i === 0) {
            isPrimeOne = false;
        }
    }
    for (let j = 2; j < angka2; j++) {
        if (angka2 % j === 0) {
            isPrimeTwo = false;
        }
    }
    if (isPrimeOne === false && isPrimeTwo === false) {
        if (angka1 > angka2) {return angka1 % angka2;} else {return angka2 % angka1}
    } else {return 1;}
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1