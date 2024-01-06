// ---- Display the current day at the top of the calendar when a user opens the planner.
const today = dayjs().format('dddd, D MMM YYYY');
$("#currentDay").text(today);

// ---- Run the screen functions ------
assignColors();
getSchedule();
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
        let itemsList = JSON.parse(localStorage.getItem('savedList')) || []; // extract items array from local storage or create it
        let taskInput = $(this).prev().val();   // extract user's input from textarea
        let hourValue = parseInt($(this).prev().prev().attr('id'));  // extract id from the hour div
        let newInput = {hour: hourValue, item: taskInput};  // create a new record object
        itemsList.push(newInput);    // add record to the array
        localStorage.setItem('savedList', JSON.stringify(itemsList)); // convert to json and add to local storage
    });
};

// ---- extract existing schedule and display --------
function getSchedule() {
    const itemsArray = JSON.parse(localStorage.getItem('savedList'));   // extract values from local storage into an array
    const hourBlocks = $('.hour');   // get all blocks with class 'hour'
    hourBlocks.each(function() {
        let blockHour = parseInt($(this).attr('id')); // extract their IDs
        // TODO: is there a better way? Big O notation
        for (i = 0; i < itemsArray.length; i++) {
            if (blockHour === itemsArray[i].hour){
                $(this).next().text(itemsArray[i].item);
            };
        };
    });
};
