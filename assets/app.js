// ---- Display the current day at the top of the calendar when a user opens the planner.
const today = dayjs().format('dddd, D MMM YYYY');
$("#currentDay").text(today);

// TODO: problem - this creates an initial delay of 5 seconds
// ----- Assign color to input blocks for Past, Present, Future ---------
const checkTime = setInterval(function() {
    const currentTime = parseInt(dayjs().format('H'));  // get the current time
    const hourBlocks = $('.hour');   // get all blocks with class 'hour'
    hourBlocks.each(function() {
        let blockHour = parseInt($(this).attr('id')); // extract their IDs
        if (blockHour < currentTime) {   // compare IDs to currentTime
            $(this).next().addClass('past');  // assign styling classes
        } else if (blockHour === currentTime) {
            $(this).next().addClass('present');
        } else if (blockHour > currentTime) {
            $(this).next().addClass('future');
        };
    });
}, 5000)  // check time & re-assign color every 5 sec






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