console.log("STUDENT SCORES:")
console.log("85")
console.log("72")
console.log("91")
console.log("64")
console.log("78")

console.log("")

let grades = 1;
switch (grades) {
    case 1:
    console.log("STUDENT 1:")
     let STUDENT1_grade = 85; 
    if (STUDENT1_grade >= 90) {
        console.log("- EXCELLENT - Passed");
    }
    else if (STUDENT1_grade >= 80) {
        console.log("85 - VERY GOOD - Passed");
    }
    else if (STUDENT1_grade >= 75) {
        console.log("- GOOD - Passed");
    } 
 else {
    console.log("FAILURE"); 
 }
    console.log("STUDENT 2:")
     let STUDENT2_grade = 72; 
    if (STUDENT2_grade >= 90) {
        console.log("EXCELLENT - Passed");
    }
    else if (STUDENT2_grade >= 80) {
        console.log("VERY GOOD - Passed");
    }
    else if (STUDENT2_grade >= 75) {
        console.log("GOOD - Passed");
    } 
else {
    console.log("72 - FAILURE") ;
}
    console.log("STUDENT 3:")
     let STUDENT3_grade = 91; 
    if (STUDENT3_grade >= 90) {
        console.log("91 - EXCELLENT - Passed");
    }
    else if (STUDENT3_grade >= 80) {
        console.log("VERY GOOD - Passed");
    }
    else if (STUDENT3_grade >= 75) {
        console.log("GOOD - Passed");
    } 
 else {
    console.log("FAILURE"); 
}
    console.log("STUDENT 4:")
     let STUDENT4_grade = 64; 
    if (STUDENT4_grade >= 90) {
        console.log("EXCELLENT - Passed");
    }
    else if (STUDENT4_grade >= 80) {
        console.log("VERY GOOD - Passed");
    }
    else if (STUDENT4_grade >= 75) {
        console.log("GOOD - Passed");
    } 
 else {
    console.log("64 - FAILURE"); 
}
    console.log("STUDENT 5:")
     let STUDENT5_grade = 78; 
    if (STUDENT5_grade >= 90) {
        console.log("EXCELLENT - Passed");
    }
    else if (STUDENT5_grade >= 80) {
        console.log("VERY GOOD - Passed");
    }
    else if (STUDENT5_grade >= 75) {
        console.log("78 - GOOD - Passed");
    } 
 else {
    console.log("FAILURE"); 
}
    break; 
    
}

console.log("")

let a = 85;
let b = 72;
let c = 91;
let d = 64;
let e = 78;
    console.log("Total Scores:", a + b + c + d + e); 

let f = 390
    console.log("Average Score:", f/5);
    console.log("Highest Score:", c);
    console.log("Lowest Score", d);
    console.log("Passed:", 2);
    console.log("Failed", 3);   
