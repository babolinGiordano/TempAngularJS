(function () {
  'use strict';

  angular
    .module('app')
    .controller('HomeSearchController', HomeSearchController);

  /** @ngInject */
  function HomeSearchController (meteoCitta, meteoCittaDettaglio) {
    var vm = this;
    vm.dati = meteoCitta.data;

    // console.log(meteoCittaDettaglio.data);
    vm.forecast = meteoCittaDettaglio.data;
  }
})();
