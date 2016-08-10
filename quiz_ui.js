var QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
        } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
      }
    },
  displayQuestion: function () {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
    }, 
  
  displayChoice = function() {
    var choices = quiz.getCurrentQuestions().choices;

  for (var i =0; i < choices.length; i++) {
    this.populateIdWithHTML("choice" + i, choices[i]);
    this.quessHandler("quess" = i, choice[i]);i
        }
     },

  displayScore: function() {
    var gameOverHTML = "<h1>GAME OVER</h1>";
    gameOverHTML =+ "<h2>Your Score is:" + quiz.score + "</h2>";
this.populateIdWithHTML("quiz", gameOverHTML);
    }, 
  
  populateIdWithHTML: function(id, text) {
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  
  quessHandler: function(id, quess) {
    var button = document.getElementsById(id);
    button.onclick = function() {
      quiz.quess(quess);
      QuizUI.displayNext();
    }
    
    },
  
  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.question.length);
  },
    
  
  }
} 
  
