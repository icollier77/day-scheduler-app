// Display the current day at the top of the calender when a user opens the planner.
const today = dayjs().format('dddd, D MMM YYYY');
$("#currentDay").text(today);

// get the current time
const currentTime = parseInt(dayjs().format('H'));



// ----- Assign color to input blocks for Past, Present, Future ---------
const hourBlocks = $('.hour');   // get all blocks with class 'hour'
hourBlocks.each(function() {
    let blockHour = parseInt($(this).attr('id')); // extract their IDs and compare their numeric values to currentTime
    if (blockHour < currentTime) {   // dynamically assign styling classes
        $(this).next().addClass('past');
    } else if (blockHour === currentTime) {
        $(this).next().addClass('present');
    } else if (blockHour > currentTime) {
        $(this).next().addClass('future');
    };
});


// TODO: Allow a user to enter an event when they click a timeblock ????
// ------- Enter an event when a user clicks a timeblock -------
// function addTask() {
    $('.container').on('click', 'button.saveBtn', function() {     // add click event (through delegation) on buttons
        let itemsList = JSON.parse(localStorage.getItem('savedList')) || [];
        let taskInput = $(this).prev().val();
        let hourValue = parseInt($(this).prev().prev().attr('id'));
        let newInput = {hour: hourValue, item: taskInput};
        itemsList.push(newInput);
        localStorage.setItem('savedList', JSON.stringify(itemsList));
    });
// };


// TODO: Save the event in local storage when the save button is clicked in that timeblock.

// TODO: Persist events between refreshes of a page