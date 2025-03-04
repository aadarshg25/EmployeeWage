const IS_ABSENT = 0;
// Generate a random number (0 or 1)
let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

//Calculate Daily Employee Wage based on Work Type
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Generate a random number (0, 1, or 2) to determine employee work type
let empCheck2 = Math.floor(Math.random() * 10) % 3;

let empHrs = 0;

switch (empCheck2) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0; // No work
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage: $" + empWage);