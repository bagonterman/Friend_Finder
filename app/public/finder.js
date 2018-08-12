
$(document).ready(function () {
    // $(document).on("click", "body", function (e) {
    //     //alert("Handler for .click() called." + e);
    //     e.preventDefault();
    //     var buttonValue = $(e.target).attr("class");
    //     //var indexClass = buttonValue.indexOf(" ");
    //     //var linkName = buttonValue.slice(indexClass + 1);///Value of second class name
    //     console.log(buttonValue)
    //     //linkName == "first" ? buildAboutMe() : (linkName == "second" ? buildPortfolio() : (linkName == "third" ? buildContact() : (linkName == "thirdB" ? moreAboutMe() : "default")));
    //     //buttonValue = "container" ? buildQuestion("Question 1", "Favorite smell", "q1", "q2_chosen", 2) : "default";
    // });
    questions = ["You enjoy skipping.", "Splashing in the mud is fun.", "You often stare into the sun.", "Stepping on legos doesn't bother you.", "You always eat your meat rare.", "Following the rules is for suckers.", "You like ice in your drink.", "Spitting is only acceptable outside.", "Squirrels are the worst animal.", "You enjoy fishing.", "Night time is the right time.", "You shouldn't tug on Superman's cape.", "You look both ways before you cross the street."];
    buildQuestion(questions)
    function buildQuestion(questions) {

        ///About you/////
        $(".containerA").append(
            `<h2>Survey Questions</h2>
        <hr>
        <h3><strong>About You</strong></h3>
        <h4>Name (Required)</h4>
        <input type="text" id="name" class="form-control" required="">
        <h4>Link to Photo Image (Required)</h4>
        <input type="text" id="photo" class="form-control" required="">
        <hr>`)
        for (i = 0; i < questions.length; i++) {
            q = i + 1;
            qNumber = "Question " + q;
            $(".containerA").append(
                `<div>
                <strong>${qNumber}</strong>
                <h4>${questions[i]}</h4>
                <select class="chosen-select" id="${"q" + q}" >
                <option value=""></option>
                <option value="1">1 (Strongly Disagree)</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 (Strongly Agree)</option>
                </select>
                </div>`);
        }
    }///buildQuestion
});