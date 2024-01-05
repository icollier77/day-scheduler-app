// Display the current day at the top of the calender when a user opens the planner.
const today = dayjs().format('dddd, D MMM YYYY');
console.log(today);
$("#currentDay").text(today);


// TODO: Present timeblocks for standard business hours when the user scrolls down.
 
// TODO: Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// TODO: Allow a user to enter an event when they click a timeblock

// TODO: Save the event in local storage when the save button is clicked in that timeblock.

// TODO: Persist events between refreshes of a page