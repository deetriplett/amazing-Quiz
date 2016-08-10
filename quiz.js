function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.protoype.quess = function(answer) { 
  if(this.getCurrentQuestion().isCorrectAnswer(answer)){
    this.score++;
  }
  this.currentQuestionIndex++;
};

Quiz.prototype.getCurrentQuestion = function() {
  return.thisquestions[this.currentQuestionIndex];
};

Quiz.prototype.hasEnded = function() {
  return.currentQuestionIndex >= this.questions.length;
};
