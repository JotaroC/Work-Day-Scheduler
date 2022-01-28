let timeDisplayEl = $("#currentDay");

// handle displaying the time
function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

$(document).ready(function() {
    $("#9hr .description").val(localStorage.getItem("9hrEvent"));
    $("#10hr .description").val(localStorage.getItem("10hrEvent"));
    $("#11hr .description").val(localStorage.getItem("11hrEvent"));
    $("#12hr .description").val(localStorage.getItem("12hrEvent"));
    $("#13hr .description").val(localStorage.getItem("13hrEvent"));
    $("#14hr .description").val(localStorage.getItem("14hrEvent"));
    $("#15hr .description").val(localStorage.getItem("15hrEvent"));
    $("#16hr .description").val(localStorage.getItem("16hrEvent"));
    $("#17hr .description").val(localStorage.getItem("17hrEvent"));

    // changeColor($("#9hr .hour").val());
    let rightNow = moment().format('k');
    console.log(rightNow);

    let example = $("#9hr").children("hour");
    console.log(example);
    $("#9hr .description").addClass("past");
})

$(".saveBtn").on("click",function() {
    let event_Text9 =  $("#9hr .description").val();
    let event_Text10 =  $("#10hr .description").val();
    let event_Text11 =  $("#11hr .description").val();
    let event_Text12 =  $("#12hr .description").val();
    let event_Text13 =  $("#13hr .description").val();
    let event_Text14 =  $("#14hr .description").val();
    let event_Text15 =  $("#15hr .description").val();
    let event_Text16 =  $("#16hr .description").val();
    let event_Text17 =  $("#17hr .description").val();

    localStorage.setItem("9hrEvent",event_Text9);
    localStorage.setItem("10hrEvent",event_Text10);
    localStorage.setItem("11hrEvent",event_Text11);
    localStorage.setItem("12hrEvent",event_Text12);
    localStorage.setItem("13hrEvent",event_Text13);
    localStorage.setItem("14hrEvent",event_Text14);
    localStorage.setItem("15hrEvent",event_Text15);
    localStorage.setItem("16hrEvent",event_Text16);
    localStorage.setItem("17hrEvent",event_Text17);
});


function changeColor(hour) {
    let rightNow = moment().format('h');
    if(hour < rightNow) {
        hour.children("textarea").addClass(past);
    }
}
// function saveText(event_Text, ) {
//     event_Text =  $("#9hr .description").val();
//     localStorage.setItem("9hrEvent",event_Text);
// }

setInterval(displayTime, 1000);





















//pseudo code
//function save () {
//function changeColor

// first enter: grab local data, change color depending on time
// click button: saving data