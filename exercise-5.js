function ubahHuruf(kata) {
    let indexWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let _kata = '';
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < indexWord.length; j++) {
            if (kata[i] === indexWord[j]) {
                if (indexWord[j] === 'z') {
                    _kata += indexWord[0];
                } else {
                    _kata += indexWord[j + 1];
                }
            }
        }
    }
    return _kata;
}

/* 
// Magic
function ubahHuruf(kata) {
    let _kata = [];
    let temp = 0;
    let hurufBaru = '';
    for (let i = 0; i < kata.length; i++) {
        temp = kata.charCodeAt(i);
        temp++;
        _kata.push(temp);
    }
    for (let i = 0; i < _kata.length; i++) {
        hurufBaru += String.fromCharCode(_kata[i]);
    }
    return hurufBaru;
}
*/

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu