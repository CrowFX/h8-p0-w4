function cariModus(arr) {
    let result = [];
    let count = 0;
    let oldHighest = 0;
    let uniform = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            uniform = false;
        }
    }
    if (uniform === true) {
        return -1
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                count++;
                if (count > oldHighest) {
                    result.push(arr[i]);
                } else {
                    oldHighest = count;
                }
            }
        }
        count = 0;
    }
    if (result.length === 0) {
        return -1;
    } else {
        return result[0];
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1