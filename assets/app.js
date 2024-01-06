// ---- Display the current day at the top of the calendar when a user opens the planner.
const today = dayjs().format('dddd, D MMM YYYY');
$("#currentDay").text(today);

// ---- Run the screen functions ------
assignColors();
checkTime();
addTask();


// ----- Assign color to input blocks for Past, Present, Future ---------
function assignColors() {
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
};

// -------- Check time every 5 seconds and re-assign colors
function checkTime(){
    const timer = setInterval(() => {
        assignColors;
    }, 5000);
}


// ------- Enter an event when a user clicks a timeblock -------
function addTask() {
    $('.container').on('click', 'button.saveBtn', function() {     // add click event (through delegation) on buttons
        let itemsList = JSON.parse(localStorage.getItem('savedList')) || [];
        let taskInput = $(this).prev().val();
        let hourValue = parseInt($(this).prev().prev().attr('id'));
        let newInput = {hour: hourValue, item: taskInput};
        itemsList.push(newInput);
        localStorage.setItem('savedList', JSON.stringify(itemsList));
    });
};


// TODO: Persist events between refreshes of a page
// extract values from local storage into an array
const itemsArray = JSON.parse(localStorage.getItem('savedList'));





