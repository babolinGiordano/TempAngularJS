(function() {
   'use strict';

   angular
   .module('app')
   .config(routerConfig);

   /** @ngInject */
   function routerConfig($stateProvider) {
      $stateProvider
      .state('home', { // Nome stato
         url: '/',
         templateUrl : 'app/home/main.html',
         controller : 'HomeMainController',
         controllerAs : 'vm'
      })
      .state('home-search', { // Nome stato
          url: '/home/search/:q', //:q indica un parametro nella url /search/:q/order/:ordine
          templateUrl : 'app/home/search.html',
          controller : 'HomeSearchController',
          controllerAs : 'vm',
          resolve : { //Metodo di prechiamata in caso positivo attivo lo stato altrimenti mostro errore
              meteoCitta : function(OpenWeatherService, $stateParams) {
                  return OpenWeatherService
                    .weather($stateParams.q);
              },
              meteoCittaDettaglio : function(OpenWeatherService, $stateParams) {
                  return OpenWeatherService
                    .forecast($stateParams.q);
              }
          }
      })
   }

})();
