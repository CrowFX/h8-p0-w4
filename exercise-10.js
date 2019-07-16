function changeMe(arr) {
    if (arr.length === 0) {return "";}
    let b = {};
    let year = new Date().getFullYear();
    for (let i = 0; i < arr.length; i++) {
        b = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: year - arr[i][3]
        }
        if (arr[i][3] === undefined || arr[i][3] > year) {b.age = 'Invalid Birth Year';}  
        console.log(b);
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""