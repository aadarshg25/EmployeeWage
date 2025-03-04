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

// UC-7A: Calculate Total Wage using forEach & reduce method
let totalEmpWage2 = 0;

empDailyWageArr.forEach((dailyWage) => (totalEmpWage2 += dailyWage));

console.log("UC-7A Total Employee Wage (forEach): $" + totalEmpWage2);

let totalWageUsingReduce = empDailyWageArr.reduce((total, wage) => total + wage, 0);

console.log("UC-7A Total Employee Wage (reduce): $" + totalWageUsingReduce);

// UC-7B: Show the Day along with Daily Wage using map function
let dailyCounter = 0;
let mapDayWithWageArr = empDailyWageArr.map((dailyWage) => {
    dailyCounter++;
    return `Day ${dailyCounter} => $${dailyWage}`;
});

console.log("UC-7B Daily Wage Map: ", mapDayWithWageArr);

// UC-7C: Show Days when Full Time Wage of 160 was earned (using filter)
const FULL_TIME_WAGE = 160;
let fullDayWageArr = mapDayWithWageArr.filter((dayWage) => dayWage.includes(FULL_TIME_WAGE));

console.log("UC-7C Days with Full Time Wage Earned: ", fullDayWageArr);

// UC-7D: Find the first occurrence of Full Time Wage (using find)
let firstFullTimeWageDay = mapDayWithWageArr.find((dayWage) => dayWage.includes(FULL_TIME_WAGE));

console.log("UC-7D First Full Time Wage Earned on: ", firstFullTimeWageDay);

// UC-7E: Check if Every Element in Full Day Wage Array is Truly Full Time Wage (using every)
let isAllFullTimeWage = fullDayWageArr.every((dayWage) => dayWage.includes(FULL_TIME_WAGE));

console.log("UC-7E Check if All Days in Full Wage Array are Full Time Wage: ", isAllFullTimeWage);

// UC-7F: Check if There is Any Part Time Wage (using some)
const PART_TIME_WAGE = 80;
let hasPartTimeWage = mapDayWithWageArr.some((dayWage) => dayWage.includes(PART_TIME_WAGE));

console.log("UC-7F Check If Any Part Time Wage Exists: ", hasPartTimeWage);

// UC-7G: Find the Number of Days the Employee Worked (using reduce)
let totalDaysWorked = empDailyWageArr.reduce((numOfDays, dailyWage) => {
    return dailyWage > 0 ? numOfDays + 1 : numOfDays;
}, 0);

console.log("UC-7G Number of Days Employee Worked: ", totalDaysWorked);

// UC-8: Store Daily Wages in a Map
let empDailyWageMap = new Map();
let empDailyHoursMap = new Map();
totalWorkingDays = 0;
totalHoursWorked = 0;

while (totalHoursWorked < MAX_HRS_IN_MONTH && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalHoursWorked += empHrs;
    empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    empDailyHoursMap.set(totalWorkingDays, empHrs);
}

let totalWageFromMap = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("UC-8 - Daily Wages in Map: ", empDailyWageMap);
console.log("UC-8 - Total Employee Wage from Map: $" + totalWageFromMap);

// UC-9A: Calculate Total Wage and Total Hours Worked using Arrow Function
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;

let totalHours = Array.from(empDailyHoursMap.values()).reduce(findTotal, 0);
let totalSalary = Array.from(empDailyWageMap.values()).reduce(findTotal, 0);

console.log(`UC-9A: Total Hours: ${totalHours}, Total Wages: ${totalSalary}`);

// UC-9B: Categorize Days as Full Working, Part Working, and No Working Days
let nonWorkingDays = [];
let partWorkingDays = [];
let fullWorkingDays = [];

empDailyHoursMap.forEach((hours, day) => {
    if (hours === FULL_TIME_HOURS) fullWorkingDays.push(day);
    else if (hours === PART_TIME_HOURS) partWorkingDays.push(day);
    else nonWorkingDays.push(day);
});

console.log("Full Working Days: ", fullWorkingDays);
console.log("Part Working Days: ", partWorkingDays);
console.log("Non Working Days: ", nonWorkingDays);