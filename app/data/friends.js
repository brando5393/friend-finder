let friends = [];

function Friend(name, photo, answers, finalScore) {
    this.name = name;
    this.photo = photo;
    this.answers = answers;
    this.finalScore = finalScore;
  };

  // on submit button click
  $("#submit-btn").on("click", function(){
    // grab survey values
    let nameEntry = $("#usersName").val().trim();
    let linkEntry = $("#photoLink").val().trim();
    let surveyAnswers = [];
    $("input:checked").each(function(){
      surveyAnswers.push(this.val());
    });
    // calculate total user score
    let totalScore = surveyAnswers.reduce((a,b) => a + b, 0);
    console.log(`The sum of all survey answers is ${totalScore}`);
    // create new friend using constructor
    nameEntry = new Friend(nameEntry, linkEntry, surveyAnswers, totalScore);
    // push new friend to friends array
    friends.push(nameEntry);
    // compare all final scores to new friend score
        // if new final score === new friend score print data to screen
        // else print no matches found to screen
  });