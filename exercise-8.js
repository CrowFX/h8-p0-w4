function tukarBesarKecil(kalimat) {
    let placeHolder = '';
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const strNumber = ['0','1','2','3','4','5','6','7','8','9'];
    const symbols = ['-', '!', ' '];
    for (let i = 0; i < kalimat.length; i++) {
        for (let j = 0; j < 26; j++ ) {
            if (kalimat[i] == uppercase[j]) {
                placeHolder += lowercase[j];
            } 
            if (kalimat[i] == lowercase[j]) {
                placeHolder += uppercase[j];
            }
        }
        for (let j = 0; j < symbols.length; j++) {
            if (kalimat[i] == symbols[j]) {
                placeHolder += symbols[j];
            }
        }
        for (let j = 0; j < strNumber.length; j++) {
            if (kalimat[i] == strNumber[j]) {
                placeHolder += strNumber[j];
            }
        }
    }
    return '"' + placeHolder + '"';
}

//'TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"