// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var surveyData = require("../data/friends");
//var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(surveyData);
        //console.log(res.json(surveyData))
    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    function findFriend(yourData) {
        //var myScore = [5, 1, 5, 1, 3, 2, 2, 5, 4, 1];
        //console.log("running findFriend")
        console.log(yourData)
        myScore = yourData.scores;
        var differenceArray = [];
        var totalScore = 0;
        for (i = 0; i < friends.length; i++) {
            for (j = 0; j < friends[i].scores.length; j++) {
                //console.log(friends[i].scores[j])
                totalScore = totalScore + Math.abs(friends[i].scores[j] - yourData[j])
            }
            console.log(totalScore)
            differenceArray.push(totalScore);///push user score to array
            totalScore = 0;///reset total for each user
        }

        Array.min = function (array) {
            return Math.min.apply(Math, array);
        };
        console.log("-----");
        console.log(differenceArray)
        var minimum = Array.min(differenceArray);
        console.log("------")
        console.log(minimum);
        console.log("------")
        console.log(friend = friends[differenceArray.indexOf(minimum)]);
        return friend = friends[differenceArray.indexOf(minimum)];
    }
    app.post("/api/friends", function (req, res) {


        res.json(findFriend(req.body.scores));
        friends.push(req.body);


        //console.log(req.body);
        //console.log(friends);


        //res.json(req.body.scores)
        //console.log(findFriend(req.body.scores))
        //console.log(res.json(findFriend(req.body.scores)))

        // friends.push(farts);
    })
    // app.post("/friends", function (req, res) {
    //     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    //     // It will do this by sending out the value "true" have a table
    //     // req.body is available since we're using the body-parser middleware
    //     function friendLogic() {
    //         var myScore = [5, 1, 5, 1, 3, 2, 2, 5, 4, 1];
    //         var differenceArray = [];
    //         var totalScore = 0;
    //         for (i = 0; i < friends.length; i++) {
    //             for (j = 0; j < friends[i].scores.length; j++) {
    //                 totalScore = totalScore + Math.abs(friends[i].scores[j] - myScore[j])
    //             }
    //             differenceArray.push(totalScore);///push user score to array
    //             totalScore = 0;///reset total for each user
    //         }

    //         Array.min = function (array) {
    //             return Math.min.apply(Math, array);
    //         };
    //         var minimum = Array.min(differenceArray);
    //         $.console.log(minimum);
    //     }
    //     if (tableData.length < 5) {
    //         tableData.push(req.body);
    //         res.json(true);
    //     }
    //     else {
    //         waitListData.push(req.body);
    //         res.json(false);
    //     }
    // });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function () {
        // Empty out the arrays of data
        tableData = [];
        waitListData = [];

        console.log(data);
    });
};
