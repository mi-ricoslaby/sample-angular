'use strict';

var RoutingConfig = require('./config');

module.exports = angular.module('user', [])
    .controller('UserListController', require('./controller/UserListController'))
    .config(function ($stateProvider) {
        angular.forEach(RoutingConfig, function (config, name) {
            $stateProvider.state(name, config);
        });
    })
;