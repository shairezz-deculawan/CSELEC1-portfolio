let name = "Shairezz";
let age = 20;
let section = "BSCS3C";
let city = "Calbayog";
let year = 3;
let gwa = 1.75;
let status = "Regular";
let course = "BS Computer Science";
let id = "23-02225";
let email = "shairezzkrisha@gmail.com";

const school = "Northwest Samar State University";
const semester = "First Semester";
const academicYear = "2026-2027";
const passingGWA = 3.00;
const subjectCount = 4;

const greet = (studentName) => {
    return "Hello, " + studentName + "!";
};

const checkGWA = (grade) => {
    if (grade <= passingGWA) {
        return "Passed";
    } else {
        return "Failed";
    }
};

const getCourse = (studentCourse) => {
    return studentCourse;
};

const getAge = (studentAge) => {
    return studentAge;
};

const getStudentName = (studentName) => {
    return studentName;
};

const students = [
    {
        name: "Shairezz",
        age: 20,
        gwa: 1.75,
        course: "BS Computer Science"
    },
    {
        name: "Randell",
        age: 29,
        gwa: 1.90,
        course: "BS Computer Science"
    },
    {
        name: "Zer Jay",
        age: 26,
        gwa: 2.25,
        course: "BS Computer Science"
    },
    {
        name: "Lyka",
        age: 27,
        gwa: 3.25,
        course: "BS Computer Science"
    }
];

const subjects = [
    {
        code: "CS301",
        name: "Programming Languages",
        units: 3
    },
    {
        code: "CS302",
        name: "Automata Theory and Formal Language",
        units: 3
    },
    {
        code: "CS303",
        name: "Software Engineering",
        units: 3
    },
    {
        code: "CS Elec 1",
        name: "Professional Elective 1",
        units: 3
    }
];

const numbers = [10, 20, 30];
const [number1, number2, number3] = numbers;

const colors = ["Red", "Blue", "Green"];
const [color1, color2, color3] = colors;

const grades = [1.75, 1.90, 2.25];
const [grade1, grade2, grade3] = grades;

const student = {
    studentName: "Shairezz",
    studentAge: 20,
    studentCourse: "BS Computer Science"
};

const { studentName } = student;
const { studentAge } = student;
const { studentCourse } = student;

const firstArray = ["HTML", "CSS"];
const secondArray = ["JavaScript", "PHP"];

const allLanguages = [
    ...firstArray,
    ...secondArray
];

const moreLanguages = [
    ...allLanguages,
    "Python"
];

const personalInfo = {
    name: "Shairezz",
    age: 20
};

const schoolInfo = {
    school: school,
    section: section
};

const completeInfo = {
    ...personalInfo,
    ...schoolInfo
};

const finalInfo = {
    ...completeInfo,
    course: course,
    gwa: gwa
};

const studentNames = students.map((student) => {
    return student.name;
});

const subjectNames = subjects.map((subject) => {
    return subject.name;
});

const passingStudents = students.filter((student) => {
    return student.gwa <= 3.00;
});

const computerScienceStudents = students.filter((student) => {
    return student.course === "BS Computer Science";
});

const account = {
    contact: {
        email: "shairezzkrisha@gmail.com"
    }
};

const contactInfo = {
    email: account.contact?.email
};

const enrollment = {
    details: {
        course: "BS Computer Science"
    }
};

const enrollmentInfo = {
    course: enrollment.details?.course
};

console.log("        STUDENT INFORMATION");
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Section: ${section}`);
console.log(`City: ${city}`);
console.log(`Year Level: ${year}`);
console.log(`GWA: ${gwa}`);
console.log(`Status: ${status}`);
console.log(`Course: ${course}`);
console.log(`ID: ${id}`);
console.log(`Email: ${email}`);

console.log("");
console.log("        SCHOOL INFORMATION");
console.log(`School: ${school}`);
console.log(`Semester: ${semester}`);
console.log(`Academic Year: ${academicYear}`);
console.log(`Number of Subjects: ${subjectCount}`);

console.log("");
console.log("        5 ARROW FUNCTIONS");
console.log(`1. ${greet(name)}`);
console.log(`2. GWA Result: ${checkGWA(gwa)}`);
console.log(`3. Course: ${getCourse(course)}`);
console.log(`4. Age: ${getAge(age)}`);
console.log(`5. Student Name: ${getStudentName(name)}`);

console.log("");
console.log("        3 DESTRUCTURED ARRAYS");
console.log(`1. Numbers: ${number1}, ${number2}, ${number3}`);
console.log(`2. Colors: ${color1}, ${color2}, ${color3}`);
console.log(`3. Grades: ${grade1}, ${grade2}, ${grade3}`);

console.log("");
console.log("        3 DESTRUCTURED OBJECTS");
console.log(`1. Student Name: ${studentName}`);
console.log(`2. Student Age: ${studentAge}`);
console.log(`3. Student Course: ${studentCourse}`);

console.log("");
console.log("        2 SPREAD ARRAYS");
console.log(`1. ${allLanguages.join(", ")}`);
console.log(`2. ${moreLanguages.join(", ")}`);

console.log("");
console.log("        2 SPREAD OBJECTS");
console.log(`1. Name: ${completeInfo.name}`);
console.log(`   Age: ${completeInfo.age}`);
console.log(`   School: ${completeInfo.school}`);
console.log(`   Section: ${completeInfo.section}`);

console.log(`2. Name: ${finalInfo.name}`);
console.log(`   Age: ${finalInfo.age}`);
console.log(`   Course: ${finalInfo.course}`);
console.log(`   GWA: ${finalInfo.gwa}`);

console.log("");
console.log("        2 MAP ARRAYS");
console.log("1. Student Names:");
studentNames.forEach((student) => {
    console.log(`   - ${student}`);
});

console.log("");
console.log("2. Subject Names:");
subjectNames.forEach((subject) => {
    console.log(`   - ${subject}`);
});

console.log("");
console.log("        2 FILTER ARRAYS");
console.log(`1. Passing Students: ${passingStudents.map((student) => student.name).join(", ")}`);
console.log(`2. BSCS Students: ${computerScienceStudents.map((student) => student.name).join(", ")}`);

console.log("");
console.log("        2 OPTIONAL CHAINING");
console.log(`1. Account Email: ${contactInfo.email}`);
console.log(`2. Enrollment Course: ${enrollmentInfo.course}`);

console.log("");
console.log("        SUBJECT LIST");
subjects.forEach((subject, index) => {
    console.log(`${index + 1}. ${subject.code} - ${subject.name} - ${subject.units} units`);
});

console.log("");
console.log("        FINAL RESULT");
console.log(`Student: ${name}`);
console.log(`Course: ${course}`);
console.log(`GWA: ${gwa}`);
console.log(`Result: ${checkGWA(gwa)}`);

console.log("");
console.log(`Welcome, ${name}!`);
