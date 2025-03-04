// UC-1: Check Employee Presence
const IS_ABSENT = 0;
// Generate a random number (0 or 1)
let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

// UC-2: Calculate Daily Employee Wage based on Work Type
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

// UC-3: Refactor Code to Use Function for Daily Working Hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Generate random number (0, 1, or 2) for employee attendance
let empCheck3 = Math.floor(Math.random() * 10) % 3;

// Get employee working hours using function
let empHrs3 = getWorkingHours(empCheck3);

// Calculate Employee Wage using refactored function
let empWage3 = empHrs3 * WAGE_PER_HOUR;

// Print Employee Wage
console.log("Refactored Employee Wage (UC-3): $" + empWage3);

// UC-4: Calculate Wages for a Month (Assuming 20 Working Days)
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;

// Loop through 20 working days
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

// Calculate Monthly Wage
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;

// Print Total Hours and Monthly Wage
console.log("Total Hours Worked: " + totalEmpHrs);
console.log("Total Monthly Wage: $" + totalEmpWage);
