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
        vm.activeQuestion = Math.floor(Math.random() * DataService.quizQuestions.length);
        vm.finalise = false;
        vm.showAnswer = false;
        vm.hideSubmit = false;
        vm.correctCount = 0;
        vm.wrongCount = 0;
        vm.questionCount = 1;
        vm.accuracy = 0;

        var numQuestionsAnswered = 0;

        function setActiveQuestion(){
          DataService.quizQuestions.splice(vm.activeQuestion, 1);
          vm.activeQuestion = Math.floor(Math.random() * DataService.quizQuestions.length);
          vm.questionCount += 1;
          vm.hideSubmit = false;
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
            }else{
              vm.wrongCount += 1;
            }
            vm.accuracy = (vm.correctCount / vm.questionCount) * 100;
        }

        function finaliseAnswers(){
            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);
        }

        function revealAnswer(){
          vm.showAnswer = true;
          vm.hideSubmit = true;
        }
    }

})();
