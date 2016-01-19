'use strict';

var appName = 'sample-angular';
var angular = require('angular');

require('angular-resource');
require('mi-angular-resource-builder');

var requires = [
    'ngResource',
    'mi.ResourceBuilder'
];

angular.module(appName, requires);

angular.bootstrap(document, [appName]);