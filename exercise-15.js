function highestScore(students) {
    if (students.length === 0) {return {};}
    let result = {};
    let placeHolder = {};
    let classList = [];
    let scoreList = [];
    let iteration = 0;
    //Gather all class list
    for (let i = 0; i < students.length; i++) {
        classList.push(students[i].class)
    }
    // Delete all copies of classList
    classList.sort();
    while (iteration < classList.length) {
        if (classList[iteration] == classList[iteration-1]) {
            classList.splice(iteration, 1);
        } else {
            iteration++;
        }
    }
    //Generate ClassList
    for (let i = 0; i < classList.length; i++) {     
        //List all available classes as keys
        result[classList[i]] = [];                   
        //Reset placeholder for every classes
        placeHolder = {};
        //generate scoreList
        scoreList = [];
        for (let j = 0; j < students.length; j++) { 
            if (students[j].class === classList[i]) {
                scoreList.push(students[j].score);
            }
        }
        //get highest score to first index
        scoreList.sort(function sorting(a,b) {return b-a});
         //compare first index to all students in current class 
        for (let j = 0; j < students.length; j++) {
            if (scoreList[0] === students[j].score) {
                placeHolder.name = students[j].name;
                placeHolder.score = students[j].score;
                result[classList[i]].push(placeHolder);                            
            }
        }
        result[classList[i]] = result[classList[i]][0];
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