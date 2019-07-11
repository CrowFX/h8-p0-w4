function graduates(students) {
    if (students.length === 0) {return {};}
    let result = {};
    let placeHolder = {};
    let classList = [];
    for (let i = 0; i < students.length; i++) { //Gathering all classes list
        classList.push(students[i].class)
    }
    classList.sort(); // Sort the classList
    for (let i = 0; i < classList.length; i++) { //Trim all copies in classList
        if (classList[i] == classList[i-1]) {
            classList.splice(i, i);
        }
    }
    for (let i = 0; i < classList.length; i++) {     //Iterate to the length of classList
        result[classList[i]] = [];                   //List all classes
        for (let j = 0; j < students.length; j++) {  //Iterate to all students available
            placeHolder = {};                        //Reset placeholder every loop
            if (students[j].score > 75 && classList[i] === students[j].class) { //fill the content of class
                placeHolder.name = students[j].name;
                placeHolder.score = students[j].score;
                result[classList[i]].push(placeHolder)
            }
        }
    }
    return result;
}
console.log(graduates([{
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([{
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}