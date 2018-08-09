friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    },
    {
        "name": "Brett",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [1, 3, 2, 1, 5, 3, 2, 5, 4, 1]
    },
    {
        "name": "Dummy",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [1, 1, 2, 1, 3, 3, 2, 5, 4, 1]
    }

]
var myScore = [5, 1, 5, 1, 3, 2, 2, 5, 4, 1];
var differenceArray = [];
var totalScore = 0;
for (i = 0; i < friends.length; i++) {
    for (j = 0; j < friends[i].scores.length; j++) {
        totalScore = totalScore + Math.abs(friends[i].scores[j] - myScore[j])
    }
    differenceArray.push(totalScore);///push user score to array
    totalScore = 0;///reset total for each user
}

Array.min = function (array) {
    return Math.min.apply(Math, array);
};
var minimum = Array.min(differenceArray);
$.console.log(minimum);

// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example: 
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.