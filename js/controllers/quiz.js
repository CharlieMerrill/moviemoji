(function(){

    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics; // Attaching the quizMetrics object to the view model
        vm.dataService = DataService;
        vm.questionAnswered = questionAnswered; // also a named function defined below
        vm.setActiveQuestion = setActiveQuestion; // setActiveQuestion is a named function below
        vm.selectAnswer = selectAnswer; // also a named function
        vm.finaliseAnswers = finaliseAnswers; //also a named function
        vm.activeQuestion = 0; // currently active question in the quiz
        vm.finalise = false;
        vm.showAnswer = false;
        vm.correctCount = 0;
        vm.wrongCount = 0;
        vm.questionCount = 1;
        vm.accuracy = 0;

        var numQuestionsAnswered = 0;

        function setActiveQuestion(){
          vm.activeQuestion = Math.floor(Math.random() * DataService.quizQuestions.length);
          vm.questionCount += 1;
        }

        function questionAnswered(){
          vm.showAnswer = false;
          vm.setActiveQuestion();
          vm.answer = ""
        }

        function selectAnswer(answer){
            DataService.quizQuestions[vm.activeQuestion].selected = answer;
            vm.showAnswer = true;
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
    }

})();
