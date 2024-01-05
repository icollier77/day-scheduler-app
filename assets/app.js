// Display the current day at the top of the calender when a user opens the planner.
const today = dayjs().format('dddd, D MMM YYYY');
$("#currentDay").text(today);

// get the current time
const currentTime = parseInt(dayjs().format('H'));

// get all blocks with class 'hour'
// extract their IDs and compare their numeric values to currentTime
// dynamically assign styling classes
const hourBlocks = $('.hour');
hourBlocks.each(function() {
    let blockHour = parseInt($(this).attr('id'));
    if (blockHour < currentTime) {
        $(this).next().addClass('past');
    } else if (blockHour === currentTime) {
        $(this).next().addClass('present');
    } else if (blockHour > currentTime) {
        $(this).next().addClass('future');
    };
});


// TODO: Allow a user to enter an event when they click a timeblock
// create 
// add click event (through delegation) on buttons
// function addTask() {
    $('.container').on('click', 'button.saveBtn', function(event) {
    let hourInput = $(this).prev().val();
    console.log(typeof hourInput);
    });
// };


// TODO: Save the event in local storage when the save button is clicked in that timeblock.

// TODO: Persist events between refreshes of a page