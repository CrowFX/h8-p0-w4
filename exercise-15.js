function highestScore(students) {
    if (students.length === 0) {return {};}
    let result = {};
    let placeHolder = {};
    let classList = [];
    let scoreList = [];
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
        result[classList[i]] = [];                   //List all available classes
        placeHolder = {};//Reset placeholder for every class
        scoreList = [];
        for (let j = 0; j < students.length; j++) { //generate scoreList
            if (students[j].class === classList[i]) {
                scoreList.push(students[j].score);
            }
        }
        scoreList.sort(function sorting(a,b) {return b-a}); //get highest score to first index
        for (let j = 0; j < students.length; j++) { //compare first index to all students in current class
            if (scoreList[0] === students[j].score) {
                placeHolder.name = students[j].name;
                placeHolder.score = students[j].score;
                result[classList[i]].push(placeHolder);                            
            }
        }
    }
    return result;
}

// TEST CASE
console.log(highestScore([{
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([{
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}