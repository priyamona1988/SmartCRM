// Comparison Operators
// == === != > < >= <=


// var a = 10;

// var b = a++ - ++a - ++a + a-- + --a;
// // 10 - 12 - 13 + 13 + 11
// // -15 + 24
// // 9

// console.log(b);


// var num1 = "10";
// var num2 = 10;

// if(num1 >= 10){
//     console.log(num1 + " *");
// }
// else{
//     console.log(num2 + " =>");
// }

// if(num1 === num2){
//     console.log("yes true");
// }
// else{
//     console.log("no false");
// }

// if(num1 == num2){
//     console.log("yes true");
// }
// else{
//     console.log("no false");
// }


// var a = 10;
// var b = 20;

// if(a == 10 && b == 20){
//     console.log("Yes");
// }
// else{
//     console.log("No");
// }

// if(a == 110 || b == 20){
//     console.log("Ok");
// }
// else{
//     console.log("Not Ok");
// }

// if(a != 10){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// Employee Eligibility

const Employee = {
    name: "Santhosh",
    age: 11
};

if(Employee.age >= 18){
    console.log("Your Eligible " + Employee.name);
}
else{
    console.log("Your Not Eligible " + Employee.name);
}


// Employee Array

const Emp = [
    {
        name: "Santhosh",
        salary: 30000
    },
    {
        name: "Swetha",
        salary: 40000
    },
    {
        name: "Saravana",
        salary: 50000
    },
    {
        name: "Deva",
        salary: 60000
    },
    {
        name: "Raghu",
        salary: 70000
    }
];


// Initial Maximum and Minimum

var max = Emp[0].salary;
var min = Emp[0].salary;

var maxEmployee = Emp[0].name;
var minEmployee = Emp[0].name;


// For Loop

for(let i = 0; i < Emp.length; i++){

    // Find Maximum Salary
    if(Emp[i].salary > max){
        max = Emp[i].salary;
        maxEmployee = Emp[i].name;
    }

    // Find Minimum Salary
    if(Emp[i].salary < min){
        min = Emp[i].salary;
        minEmployee = Emp[i].name;
    }
}


// Display Result

console.log("Maximum Salary : " + max);
console.log("Maximum Salary Employee : " + maxEmployee);

console.log("Minimum Salary : " + min);
console.log("Minimum Salary Employee : " + minEmployee);

let a = 10;
a= a+10; 
console.log(a);



