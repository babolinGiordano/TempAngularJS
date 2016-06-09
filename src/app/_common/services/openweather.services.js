(function() {
    'use strict';

    angular
    .module('app')
    .service('OpenWeatherService', OpenWeatherService);

    function OpenWeatherService($http, APPID) {
        return {
            weather : weather,
            forecast : forecast
        }

        function weather(q, l, u) {
            return $http.get("http://api.openweathermap.org/data/2.5/weather"
            + "?q=" + q + "&lang=IT" + "&units=metric"
            + "&APPID=" + APPID);
        }

        function forecast(q) {
            return $http.get("http://api.openweathermap.org/data/2.5/forecast"
            + "?q=" + q + "&lang=IT" + "&units=metric"
            + "&APPID=" + APPID);
        }
    }
})();
