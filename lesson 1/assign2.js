class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
    }

    getAverage() {
        let sum = 0;

        for (let score of this.scores) {
            sum += score;
        }

        return sum / this.scores.length;
    }

    getLetterGrade() {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
}

function analyzeClass(students) {
    let total = 0;
    let topStudent = students[0];

    console.log("------ STUDENT REPORT ------");

    for (let student of students) {
        let average = student.getAverage();

        console.log(
            `${student.name} - Average: ${average.toFixed(1)} | Grade: ${student.getLetterGrade()}`
        );

        total += average;

        if (average > topStudent.getAverage()) {
            topStudent = student;
        }
    }

    let classAverage = total / students.length;

    console.log("----------------------------");
    console.log(`Class Average: ${classAverage.toFixed(1)}`);
    console.log(
        `Top Student: ${topStudent.name} with ${topStudent.getAverage().toFixed(1)}`
    );
}

const studentData = [
    { name: "Lany", scores: [85, 90, 92] },
    { name: "Bongbung", scores: [70, 75, 68] },
    { name: "Dutherth", scores: [95, 98, 92] },
    { name: "Pico", scores: [55, 60, 58] }
];

const students = [];

for (let data of studentData) {
    students.push(new Student(data.name, data.scores));
}

analyzeClass(students);