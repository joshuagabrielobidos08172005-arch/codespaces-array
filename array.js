//array activity

//display all students in array
function displayStudents() {
    let students = ["Anna", "Betty", "Carmilla"];
    console.log("Display All Students In Array");
    console.log(students);
}

//display all students in different lines
function displayStudentsInBrLines () {
    let students = ["Anna", "Betty", "Carmilla"];
    console.log("Display All Students In Different Lines");
    console.log(students[0]);
    console.log(students[1]);
    console.log(students[2]);
}

//display the first student
function displayFirstStudent () {
    let students = ["Anna", "Betty", "Carmilla"];
    console.log("Display First Student");
    console.log(students[0]);
}

//display the last student
function displayLastStudent () {
    console.log("Display Last Student");
    let students = ["Anna", "Betty", "Carmilla"];
    console.log(students[2]);
}


//add a new student as the first value in array
function addStudentFront () {
    console.log("Add A New Student In The Front");
    let students = ["Anna", "Betty", "Carmilla"];
    students.unshift("Ava");
    console.log(students[0]);
    console.log(students[1]);
    console.log(students[2]);
    console.log(students[3]);
}

//add a new student as the last value in array
function addStudentLast () {
    console.log("Add A New Student To The Last");
    let students = ["Anna", "Betty", "Carmilla"];
    students.push("Dianne");
    console.log(students[0]);
    console.log(students[1]);
    console.log(students[2]);
    console.log(students[3]);
}

//remove the last student in the array
function removeStudentLast () {
    console.log("Remove the last student");
    let students = ["Anna", "Betty", "Carmilla"];
    students.pop();
    console.log(students[0]);
    console.log(students[1]);
    console.log(students[2]);
}

function changeSecondStudentName () {
    console.log("Change The Second Student's Name");
    let students = ["Anna", "Betty", "Carmilla"];
    students.splice(1, 1, "Bella");
    console.log(students[0]);
    console.log(students[1]);
    console.log(students[2]);
}


displayStudents()
console.log("========================================");

displayStudentsInBrLines()
console.log("========================================");

displayFirstStudent ()
console.log("========================================");

displayLastStudent ()
console.log("========================================");

addStudentFront ()
console.log("========================================");

addStudentLast ()
console.log("========================================");

removeStudentLast ()
console.log("========================================");

changeSecondStudentName ()
console.log("========================================");