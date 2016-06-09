(function() {
   'use strict';

   angular
   .module('app')
   .controller('HomeMainController', HomeMainController);

   /** @ngInject */
   //Chiedo a angular di passarmi la variabile $http(servizio) che e' stata registrata nel serviceContainer
   function HomeMainController ($state, $localStorage) {
      var vm = this;
      
      vm.pending = false;
      vm.search = search;
      // Verifico se in localStorage e' presente il valore di ricerca e se si lo setto
      if ($localStorage['HomeMainController-query'] ) {
         vm.query = $localStorage['HomeMainController-query'];
      }

      function search () {
         vm.pending = true;
         $localStorage['HomeMainController-query'] = vm.query; //Salvo nel localStorage la variabile
         $state.go("home-search", { q: vm.query }); //Cambio stato e quindi anche pagina, in questo caso passando dei parametri
      }
   }
   // .error(function() { //Codice hhtp 500 gestiremo a parte in modo centralizzato
   //    console.log("KO");
   // });
})();
