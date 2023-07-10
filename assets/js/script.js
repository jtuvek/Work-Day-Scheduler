// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Retrieve the current date using Day.js and format it as "MMMM D, YYYY"
  var currentDate = dayjs().format("MMMM D, YYYY");

  // Set the formatted current date to the element with the id "currentDay"
  $("#currentDay").text(currentDate);

  // Get the current hour using Day.js and store it in a variable
  var currentHour = dayjs().hour();

  // Iterate over each time block
  $(".time-block").each(function () {
    // Get the hour from the time block's id
    var hour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the hour with the current hour to determine if it's past, present, or future
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    // Retrieve the event text from local storage for the current time block
    var eventText = localStorage.getItem("event-" + hour);

    // If there is an event text, populate the textarea with it
    if (eventText) {
      $(this).find(".description").val(eventText);
    }
  });

  // Attach a click event listener to all save buttons
  $(".saveBtn").on("click", function () {
    // Get the hour of the clicked save button
    var hour = parseInt($(this).parent().attr("id").split("-")[1]);

    // Get the event text from the textarea in the same time block
    var eventText = $(this).siblings(".description").val();

    // Store the event text in local storage with a key specific to the hour
    localStorage.setItem("event-" + hour, eventText);
  });
});