function digitPerkalianMinimum(angka) {
    let temp = [];
    let divisor = [];
    let lenOld = 0;
    let lenNew = -1;
    let len = 0;
    let removal;
    let q;
    let w;
    for (let i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            temp.push(i)
            temp.push(angka / i)
            divisor.push(temp);
            temp = [];
        }
    }
    removal = divisor.length;
    if (removal > 2) {
        divisor.splice(removal / 2, removal);
    }
    if (divisor.length == 1) {
        return 2;
    } else if (divisor.length == 2) {
        q = String(divisor[0][0]);
        w = String(divisor[0][1]);
        return q.length + w.length;
    } else {
        for (let i = 0; i < divisor.length; i++) {
            q = String(divisor[i][0]);
            w = String(divisor[i][1]);
            len = q.length + w.length;
            if (len < lenOld) {
                lenNew = len;
            } else {
                lenOld = len;
            }
        }
        if (lenNew == -1) {
            return len;
        } else {
            return lenNew;
        }
    }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2