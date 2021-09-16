'use strict';

/*
**********************CODING TASK No 2*****************************
1. Create an array - students, insert four items, which should be objects and have three properties: name, score1, score2, 
    with the following values:
    a. John, 47, 46
    b. Bob, 23, 24
    c. Nick, 40, 35
    d. Alex, 44, 45
2. Suppose that, students have chance to get different degrees of diploma, like A, B, C, D, E and those degrees are relevant to the following passing limits 91, 81, 71, 61, 51. According to that, create two arrays for passing limits and for degrees
3. Create function which will calculate total score (score1 + score2) for each student.
4. Create function and use in it for loops, if else statements and whatever you need, in order to figure out, which student has passed an exam and what kind of degree he has got.
5. Display the final result in console.
*/

// SOLUTION:
// 1.
const students = [
  {
    name: 'John',
    score1: 47,
    score2: 46,
  },
  {
    name: 'Bob',
    score1: 23,
    score2: 24,
  },
  {
    name: 'Nick',
    score1: 40,
    score2: 35,
  },
  {
    name: 'Alex',
    score1: 44,
    score2: 45,
  },
];


// 2.
const degrees = ['A', 'B', 'C', 'D', 'E'];
const passingLimit = [91, 81, 71, 61, 51];

// 3.
// === second approach ===
const calcTotalScore = function (score1, score2) {
  const totalScore = score1 + score2;
  return totalScore;
};

for (let i = 0; i < students.length; i++) {
  const totalScore = calcTotalScore(students[i].score1, students[i].score2);
  students[i].totalScore = totalScore;
}
console.log(students);

// reform array by using map just for fun
const newStudentsArray = students.map(item => {
  let rItem = {};
  rItem[item.name] = item.totalScore;
  return rItem;
});
console.log(newStudentsArray);

// 4.
const getDegree = function (totalScore) {
  for (let x = 0; x < passingLimit.length; x++) {
    let degree = '';
    if (totalScore >= passingLimit[x]) {
      degree = degrees[x];
      return degree;
    }
  }
};
// console.log(getDegree(students[3].totalScore));
// console.log(getDegree(students[1].totalScore));

// 5.
for (let i = 0; i < students.length; i++) {
  students[i].degree = getDegree(students[i].totalScore);
  if (!students[i].degree) {
    students[i].degree = 'no degree';
  }
}
console.log(students);

/* === first aproach === */
/*
const calcTotalScore = function () {
  for (let i = 0; i < students.length; i++) {
    const totalScore = students[i].score1 + students[i].score2;
    const studentsName = students[i].name;
    // console.log(studentsName, totalScore);

    let studentsDegree = '';

    for (let i = 0; i < students.length; i++) {
      if (totalScore > passingLimit[i]) {
        studentsDegree = degrees[i];
        // console.log(studentsDegree);
        break;
      } else {
          studentsDegree = 'no degree'
      }
    }
    
    console.log(`${students[i].name} => total score: ${totalScore}, degree: ${studentsDegree}`)
  }
};
calcTotalScore();
*/


