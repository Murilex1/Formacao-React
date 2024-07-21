//Function annotations

function subtract (num1, num2) {
    return num1 - num2;
}

function sum(num1,num2) {
    return num1 + num2;
}

const resultsub = subtract(10,2);
const resultsum = sum(10,2);
console.log(`Result subtract: ${resultsub} \nResult sum: ${resultsum}`);

//Array annotations
const students = [
    {
        name: "Muliro",
        age: 95
    },
    {
        name: "Teste",
        age:88
    },
    {
     name: "Test22",
     age:44,
    }

]
console.log(students[1]);

//Add object in array
students.push({
    name: "Test22",
    age:44,
})

console.log(students[2]);

//ES6 Features

//Filter
const studentsFilters = students.filter(student => student.age < 100)
console.table(studentsFilters);

//Find
const studentMuliro = students.find(student => student.name == 'Muliro')
console.log(studentMuliro);

//FindIndex
const studentMuliroIndex = students.findIndex((student) => student.name == 'Muliro')
console.log(studentMuliroIndex);

//Reduce
const ages = students.reduce((acc,student) => {
    return acc + student.age
},0)
console.log(ages);

//Some
const overAge = students.some(students => students.age < 1000)
console.log(overAge);

//Every
const greaterThanFifty = students.every(students => students.age < 50)
console.log(greaterThanFifty);