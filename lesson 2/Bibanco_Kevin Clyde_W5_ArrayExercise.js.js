console.log("STUDENT SCORE ARRAY ANALYZER");

// ORIGINAL DATA
let names = ["Ana", "Ben", "Carla", "Daniel", "Ella"];
let scores = [85, 72, 91, 64, 78];

let activities = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 95],
    [60, 65, 67],
    [75, 78, 81]
];


// PART 1
console.log("\nPART A: ORIGINAL RECORDS");

for (let i = 0; i < names.length; i++) {
    console.log(i + " - " + names[i] + ": " + scores[i]);
}


// PART 2
console.log("\nPART B: ADD NEW STUDENTS");

names.push("Faith");
scores.push(88);

names.unshift("Aaron");
scores.unshift(76);

console.log("Names:", names);
console.log("Scores:", scores);
console.log("Number of Students:", names.length);


// PART 3
console.log("\nPART C: REMOVE AND REPLACE");

names.shift();
scores.shift();

names.pop();
scores.pop();

let daniel = names.indexOf("Daniel");

names.splice(daniel, 1);
scores.splice(daniel, 1);

names.splice(2, 0, "Grace");
scores.splice(2, 0, 82);

console.log("Names:", names);
console.log("Scores:", scores);


// PART 4
console.log("\nPART D: CLASS STATISTICS");

let total = 0;

for (let i = 0; i < scores.length; i++) {
    total = total + scores[i];
}

let average = total / scores.length;

let highest = scores[0];
let lowest = scores[0];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] > highest) {
        highest = scores[i];
    }

    if (scores[i] < lowest) {
        lowest = scores[i];
    }
}

console.log("Total Score:", total);
console.log("Average Score:", average.toFixed(2));
console.log("Highest Score:", highest);
console.log("Lowest Score:", lowest);


// PART 5
console.log("\nPART E: PASSING SCORE");

let passing = scores.filter(score => score >= 75);

let status = scores.map(score => {
    if (score >= 75) {
        return "Passed";
    } else {
        return "Failed";
    }
});

let failed = scores.some(score => score < 75);

let allPassed = scores.every(score => score >= 75);

console.log("Passing Scores:", passing);
console.log("Statuses:", status);
console.log("At Least One Failed:", failed);
console.log("All Students Passed:", allPassed);


// PART 6
console.log("\nPART F: SORT AND SEARCH");

let sorted = Array.from(scores);

sorted.sort((a, b) => b - a);

console.log("Highest to Lowest:", sorted);
console.log("Contains 91:", scores.includes(91));
console.log("Index of 91:", scores.indexOf(91));


// PART 7
console.log("\nPART G: ACTIVITY SCORES");

let activityAverages = [];

let originalNames = ["Ana", "Ben", "Carla", "Daniel", "Ella"];

for (let i = 0; i < activities.length; i++) {

    let totalActivity = 0;

    for (let j = 0; j < activities[i].length; j++) {
        console.log(
            originalNames[i] +
            " Activity " +
            (j + 1) +
            ": " +
            activities[i][j]
        );

        totalActivity = totalActivity + activities[i][j];
    }

    let activityAverage =
        totalActivity / activities[i].length;

    activityAverages.push(activityAverage);

    console.log(
        originalNames[i] +
        "'s activity average: " +
        activityAverage.toFixed(2)
    );
}

console.log("Activity Averages:", activityAverages);


// AND THE LAST PART
console.log("\nPART H: TEXT SUMMARY");

console.log("Students: " + names.join(" | "));R