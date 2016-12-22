(function() {
  'use strict';

  angular.module('app').controller('ListaTarefasController', ListaTarefasController);

  ListaTarefasController.$inject = ['ListaTarefasService'];

  function ListaTarefasController(ListaTarefasService) {
    var vm = this;

    vm.adicionarItem = function() {
      vm.listaTarefa.push({
        descricao: vm.itemDescricao,
        concluido: true
      });

      vm.itemDescricao = '';
    };

    function init(){
      vm.listaTarefa = ListaTarefasService.obterListaTarefas();
    }

    init();
  }
})();
