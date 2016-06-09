/* global moment:false */
(function() {
   'use strict';

   //Posso settare delle costanti che poi posso usare e recuperare in giro per la mia app
   angular
      .module('app')
      .constant('moment', moment)
      .constant('APPID', '1e9485006660f5db2240d6e6d7e8e44c');

})();

//NB con gulp posso anche fare una scelta di quali costanti usare in fase di build
