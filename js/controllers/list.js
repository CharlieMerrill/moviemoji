(function(){

    angular
        .module("moviemoji")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataService'];

    function ListController(quizMetrics, DataService){
        var vm = this;

        vm.quizMetrics = quizMetrics;
        vm.activateQuiz = activateQuiz;


        function activateQuiz(){
            quizMetrics.changeState("quiz", true);
        }
    }

})();
