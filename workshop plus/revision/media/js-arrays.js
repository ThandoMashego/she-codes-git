// Challenge 1
// Create an array weekDays with all days of the week, console log the array

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]);
console.log(weekDays[6]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays[6] = "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays [0] = ""
weekDays [1] = ""
console.log(weekDays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
function logDaily(days){
    console.log(days)
    (`Temperature on ${weekDays}is 18 degrees`)
}

weekDays.forEach(logDaily);

let click = document.querySelector(#special-button);
click.addEventListener("click")