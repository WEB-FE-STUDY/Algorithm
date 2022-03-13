// const answers = [1, 2, 3, 4, 5];
const answers = [1,3,2,4,2];

function solution(answers) {
  const answer = [];
  const temp = [];
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  students.forEach((student, students_i) => {
    temp[students_i] = 0;

    answers.forEach((n, answers_i) => {
      if (n === student[answers_i % student.length]) {
        temp[students_i] += 1;
      }
    });
  });
  
  const maxCount = Math.max(...temp);

  temp.forEach((n, i) => {
    if (maxCount === n) {
      answer.push(i + 1);
    }
  })

  return answer;
}

console.log(solution(answers));
