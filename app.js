//Create Questions
var question = [
  new Question("Who was the first President of the United States?", ["George Washington", "Thomas Jefferson" ], "George Washington"),
  new Question("What Bear is best", ["Brown Bear", "Beets", "Battlestar Galactica" ], "Brown Bear"),
  new Question("What is the answer to the Ultimate Question of Life, the Universe, and Everything?", ["Pi", "42" ], "42")
  new Question("Who should have been America's president?", "Bernie Sanders");   
  new Question("Who's the orangest troll of them all?", "Donald Trump"); 
  new Question("Pi is...", 3.14); 
  new Question("Who's better, The Verge or CNET?", "CNET"); 
  ];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();
