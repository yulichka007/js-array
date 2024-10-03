const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// Ваше завдання: реалізувати наступні функції

// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  let topStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topStudents.push(students[i].name);
    }
  }
  return topStudents;
}


function getAverageAge(students) {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  return totalAge / students.length;
}


function addStudent(students, student) {
  students.push(student);
  return students;
}


function removeStudentByName(students, name) {
  let updatedStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      updatedStudents.push(students[i]);
    }
  }
  return updatedStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };