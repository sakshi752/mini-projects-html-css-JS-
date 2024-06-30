// 1. current Date and time
const now=new Date()
console.log(now);

// 2. specific date and time
const specificDate=new Date("2023-12-25T10:30:00")
console.log(specificDate);

// Date Components
const customDate = new Date(2023, 11, 25, 10, 30, 0); // Note: Month is 0-indexed (11 is December)
console.log(customDate); // Outputs: Mon Dec 25 2023 10:30:00 GMT+0000

// getting year, month, day etc
const dateInfo = new Date();
console.log(dateInfo.getFullYear()); // e.g., 2024
console.log(dateInfo.getMonth()); // Month (0-11, January is 0)
console.log(dateInfo.getDate()); // Day of the month (1-31)
console.log(dateInfo.getHours()); // Hours (0-23)
console.log(dateInfo.getMinutes()); // Minutes (0-59)
console.log(dateInfo.getSeconds()); // Seconds (0-59)
console.log(dateInfo.getMilliseconds()); // Milliseconds (0-999)
console.log(dateInfo.getDay()); // Day of the week (0-6, Sunday is 0)

// update components
const updateDate = new Date();
updateDate.setFullYear(2025);
updateDate.setMonth(5); // June
updateDate.setDate(15);
updateDate.setHours(8);
updateDate.setMinutes(20);
console.log(updateDate); // Outputs the updated date and time

// locale string
const localeDate = new Date();
console.log(localeDate.toLocaleDateString()); // e.g., "6/30/2024" in US format
console.log(localeDate.toLocaleTimeString()); // e.g., "10:24:59 AM" in US format
console.log(localeDate.toLocaleString()); // e.g., "6/30/2024, 10:24:59 AM" in US format

// adding dates
const addDate = new Date();
addDate.setDate(addDate.getDate() + 5); // Adds 5 days
console.log(addDate); // Outputs the new date

// difference between dates
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-06-30');
const diffTime = Math.abs(date2 - date1); // Difference in milliseconds
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
console.log(diffDays); // Outputs the difference in days



