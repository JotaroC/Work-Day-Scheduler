let timeDisplayEl = $("#currentDay");

// handle displaying the time
function displayTime() {
    let Time = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(Time);
}

$(document).ready(function() {
    $('.description').each(function () {
        // id_key is the key for getItem and setItem
        let id_Key = $(this).attr("id");
        $(this).val(localStorage.getItem(id_Key));
    });
    
    $('.hour').each(function () {
        // k displays the hours in 24 hours (1-24)
        // parseInt turns string to number
        let currentTime = parseInt(moment().format('k'));
        let time_Block = parseInt($(this).text());
    
        if(time_Block < currentTime) {
            $(this).siblings(".description").addClass("past");
        } else if(time_Block > currentTime) {
            $(this).siblings(".description").addClass("future");
        } else {
            $(this).siblings(".description").addClass("present");
        }    
    });
});

// addEventListener("click",function)
$(".saveBtn").on("click",function() {
    $('.description').each(function () {
        let id_Key = $(this).attr("id");
        localStorage.setItem(id_Key,$(this).val());     
    });
});

setInterval(displayTime, 1000);
