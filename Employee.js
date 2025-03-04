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

// UC-5: Calculate Wages till Total Working Hours (160) or Max Days (20) is Reached
const MAX_HRS_IN_MONTH = 160;
const MAX_WORKING_DAYS = 20;

let totalWorkingDays = 0;
let totalHoursWorked = 0;

while (totalHoursWorked < MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalHoursWorked += getWorkingHours(empCheck);
}

// Calculate final employee wage
let finalEmpWage = totalHoursWorked * WAGE_PER_HOUR;

// Print final wage details
console.log("UC-5 - Total Days Worked: " + totalWorkingDays);
console.log("UC-5 - Total Hours Worked: " + totalHoursWorked);
console.log("UC-5 - Total Employee Wage: $" + finalEmpWage);

// UC-6: Store the Daily Wage along with the Total Wage in an Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let empDailyWageArr = []; // Array to store daily wages

totalWorkingDays = 0;
totalHoursWorked = 0;

while (totalHoursWorked < MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalHoursWorked += empHrs;

    // Store daily wage in array
    empDailyWageArr.push(calcDailyWage(empHrs));
}

// Calculate total employee wage using array
let totalWageFromArray = empDailyWageArr.reduce((total, wage) => total + wage, 0);

// Print daily wages and total wage
console.log("UC-6 - Daily Wages: ", empDailyWageArr);
console.log("UC-6 - Total Employee Wage from Array: $" + totalWageFromArray);