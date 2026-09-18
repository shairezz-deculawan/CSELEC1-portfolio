let studentInfo = {
    name: "Shairezz",
    age: 18
};

let schoolInfo = {
    school: "Northwest Samar State University",
    city: "Calbayog"
};

class Person {
    #name;

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    getName() {
        return this.#name;
    }

    introduce() {
        console.log("I am a person.");
    }
}

class Student extends Person {
    #course;

    constructor(name, age, course) {
        super(name, age);
        this.#course = course;
    }

    getCourse() {
        return this.#course;
    }

    introduce() {
        console.log("I am " + this.getName() + ", a student.");
    }

    study() {
        console.log(this.getName() + " is studying.");
    }
}

class Teacher extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    introduce() {
        console.log("I am " + this.getName() + ", a teacher.");
    }

    teach() {
        console.log(this.getName() + " is teaching " + this.subject);
    }
}

class Course {

    constructor(name, units) {
        this.name = name;
        this.units = units;
    }

    showCourse() {
        console.log(this.name + " has " + this.units + " units.");
    }
}

let names = ["Zer Jay", "Lyka", "Sherean"];
let grades = [90, 85, 88];
let subjects = ["CS301", "CS302", "CS Elect1"];

let age = 18;
let passingGrade = 75;
let total = 0;

let student = new Student("Shairezz", 18, "BSCS");
let teacher = new Teacher("Mr. Yuri", 30, "CS Elect 1");
let course = new Course("Professional Elective 1", 3);

console.log("STUDENT INFORMATION");
console.log("Name: " + studentInfo.name);
console.log("Age: " + studentInfo.age);
console.log("Course: " + student.getCourse());

console.log("\nSCHOOL INFORMATION");
console.log("School: " + schoolInfo.school);
console.log("City: " + schoolInfo.city);


student.study();
teacher.teach();
course.showCourse();


let people = [student, teacher];

for (let person of people) {
    person.introduce();
}

console.log("\nSTATUS");

if (age >= 18) {
    console.log("Age Status: Adult");
} else {
    console.log("Age Status: Minor");
}

if (grades[0] >= passingGrade) {
    console.log("Grade Status: Passed");
} else {
    console.log("Grade Status: Failed");
}

if (grades[1] >= 90) {
    console.log("Performance: Excellent");
} else {
    console.log("Performance: Good");
}

console.log("\nSTUDENT LIST");

for (let i = 0; i < names.length; i++) {
    console.log((i + 1) + ". " + names[i]);
}

console.log("\nSUBJECTS");

let i = 0;

while (i < subjects.length) {
    console.log((i + 1) + ". " + subjects[i]);
    i++;
}

console.log("\nGRADES");

for (let grade of grades) {
    console.log("Grade: " + grade);
    total = total + grade;
}

console.log("Total Grade: " + total);