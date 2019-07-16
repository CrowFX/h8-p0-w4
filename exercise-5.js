function ubahHuruf(kata) {
    const indexWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for (let i = 0; i < kata.length; i++) {
        for (let j = 0; j < indexWord.length; j++) {
            if (kata[i] === indexWord[j]) {
                if (indexWord[j] === 'z') {
                    result += indexWord[0];
                } else {
                    result += indexWord[j + 1];
                }
            }
        }
    }
    return result;
}

/* 
// Magic
function ubahHuruf(kata) {
    let result = [];
    let temp = 0;
    let hurufBaru = '';
    for (let i = 0; i < kata.length; i++) {
        temp = kata.charCodeAt(i);
        temp++;
        result.push(temp);
    }
    for (let i = 0; i < result.length; i++) {
        hurufBaru += String.fromCharCode(result[i]);
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