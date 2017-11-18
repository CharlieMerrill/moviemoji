(function(){

    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered;
        vm.setActiveQuestion = setActiveQuestion;
        vm.selectAnswer = selectAnswer;
        vm.finaliseAnswers = finaliseAnswers;
        vm.revealAnswer = revealAnswer;
        vm.randomQuote = randomQuote;
        vm.randomEmojis = randomEmojis;
        vm.activeQuestion = Math.floor(Math.random() * DataService.quizQuestions.length);
        vm.finalise = false;
        vm.showAnswer = false;
        vm.hideSubmit = false;
        vm.correctCount = 0;
        vm.questionCount = 1;
        vm.accuracy = 0;
        vm.correct = false;
        vm.wrong = false;
        vm.quote = "";
        vm.emoji1 = "";
        vm.emoji2 = "";
        vm.emoji3 = "";
        vm.emoji4 = "";
        vm.emoji5 = "";

        var numQuestionsAnswered = 0;

        function setActiveQuestion(){
          if(vm.questionCount === 10){
            finaliseAnswers();
          } else {
          DataService.quizQuestions.splice(vm.activeQuestion, 1);
          vm.activeQuestion = Math.floor(Math.random() * DataService.quizQuestions.length);
          vm.questionCount += 1;
          vm.hideSubmit = false;
          vm.wrong = false;
          vm.correct = false;
          }
        }

        function questionAnswered(){
          vm.showAnswer = false;
          vm.setActiveQuestion();
          vm.answer = ""
        }

        function selectAnswer(answer){
            DataService.quizQuestions[vm.activeQuestion].selected = answer;
            if(DataService.quizQuestions[vm.activeQuestion].correctAnswer.indexOf(answer.toLowerCase()) > -1){
              vm.correctCount += 1;
              vm.wrong = false;
              vm.correct = true;
              vm.hideSubmit = true;
              revealAnswer();
            }else{
              vm.wrong = true;
            }
            vm.accuracy = (vm.correctCount / vm.questionCount) * 100;
        }

        function finaliseAnswers(){
            vm.finalise = true;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            randomQuote();
            randomEmojis();
        }

        function revealAnswer(){
          vm.showAnswer = true;
          vm.hideSubmit = true;
        }

        function randomQuote(){
          if(vm.correctCount > 5){
            var goodQuotes = ["Here's to looking at you, kid.", "May the Force be with you.",
            "I think this is the beginning of a beautiful friendship", "Show me the money!",
            "You had me at hello.", "Nobody puts baby in the corner!", "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
            "We're on a mission from god.", "I'm king of the world!"];
            vm.quote = goodQuotes[Math.floor(Math.random() * goodQuotes.length)];
          } else {
            var badQuotes = ["What we've got here in failure to communicate!", "You're clearly not ready for your close-up.",
            "You can't handle the truth!", "You're gonna need a bigger boat.",
            "Well, nobody's perfect.", "Houston, we have a problem.", "Hasta la vista, baby.",
            "Stupid is as stupid does.", "It's only a flesh wound.", "You coulda been a contener. You coulda been somebody.",
            "Inconceivable!", "You'll shoot your eye out.", "You're killing me smalls!", "YOU SHALL NOT PASS!"];
            vm.quote = badQuotes[Math.floor(Math.random() * badQuotes.length)];
          }
        }

        function randomEmojis(){
          if(vm.correctCount > 5){
            var goodEmojis = ["emojis/food/champagne.png", "emojis/nature/shooting-star.png",
            "emojis/nature/clover.png", "emojis/objects/fireworks.png", "emojis/objects/medal.png",
            "emojis/objects/trophy.png", "emojis/objects/party.png", "emojis/people/nerd.png",
            "emojis/people/smiley-halo.png", "emojis/people/smiley-squinting.png", "emojis/people/smiley.png",
            "emoji/people/star-eyes.png", "emojis/people/winking.png", "emojis/symbols/clapping.png",
            "emojis/symbols/hundred-points.png", "emojis/symbols/ok-hand.png", "emojis/symbols/raising-hands.png",
            "emojis/symbols/thumbs-up.png"];
            vm.emoji1 = goodEmojis[Math.floor(Math.random() * goodEmojis.length)];
            vm.emoji2 = goodEmojis[Math.floor(Math.random() * goodEmojis.length)];
            vm.emoji3 = goodEmojis[Math.floor(Math.random() * goodEmojis.length)];
            vm.emoji4 = goodEmojis[Math.floor(Math.random() * goodEmojis.length)];
            vm.emoji5 = goodEmojis[Math.floor(Math.random() * goodEmojis.length)];
          } else {
            var badEmojis = ["emojis/people/angry-face.png", "emojis/people/crying-face.png",
            "emojis/people/face-palm.png", "emojis/people/poop.png", "emojis/people/screaming-face.png",
            "emojis/people/skull-and-crossbones.png", "emojis/people/skull.png", "emojis/people/swearing.png",
            "emojis/people/tear-face.png", "emojis/people/x-eyes.png", "emojis/symbols/middle-finger.png",
            "emojis/symbols/thumbs-down.png", "emojis/symbols/x.png", "emojis/symbols/warning-sign.png"];
            vm.emoji1 = badEmojis[Math.floor(Math.random() * badEmojis.length)];
            vm.emoji2 = badEmojis[Math.floor(Math.random() * badEmojis.length)];
            vm.emoji3 = badEmojis[Math.floor(Math.random() * badEmojis.length)];
            vm.emoji4 = badEmojis[Math.floor(Math.random() * badEmojis.length)];
            vm.emoji5 = badEmojis[Math.floor(Math.random() * badEmojis.length)];
          }
        }
    }

})();
