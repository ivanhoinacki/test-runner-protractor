(function() {
  angular.module('app').factory('ListaTarefasService', ListaTarefasService);

  function ListaTarefasService() {
    var service = {
      obterListaTarefas: obterListaTarefas
    };

    function obterListaTarefas() {
      var listaTarefas =
      [
        {
          descricao: 'Estudar AngularJS',
          concluido: true
        },
        {
          descricao: 'Estudar testes utilizando Protractor',
          concluido: true
        }
      ];

      return listaTarefas;
    }

    return service;
  }
})();
