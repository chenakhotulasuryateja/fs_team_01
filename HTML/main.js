

// this is rating page
    
    function rate(stars) {
    // Reset all stars to default color
    for (let i = 1; i <= 5; i++) {
        document.getElementById(i).style.color = "silver";
    }

    // Color the clicked stars
    for (let i = 1; i <= stars; i++) {
        document.getElementById(i).style.color = "gold";
    }
}

function submitFeedback() {
    // Check if at least one star is selected
    let selectedStars = 0;
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(i).style.color === "gold") {
            selectedStars++;
        }
    }

    // If no stars are selected, display an alert
    if (selectedStars === 0) {
        alert("Please enter your review by selecting the stars.");
    } else {
        // Otherwise, show the success message
        alert("Feedback submitted successfully!");
    }
}
// rating page end



// table reservation form


function booking() {



    var name = document.getElementById("name").value;
    var mnum = document.getElementById("mnum").value;
    var pnum = document.getElementById("pnum").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // if user doesnt give any input it shows please enter all details
    if (name === "" || mnum === "" || pnum === "" || date === "" || time === "") {
        alert("Please enter all details.");
    } else {
        // its shows that your table has reserved
        alert("Your table has reserved");
    }
}



// table reservation form end








