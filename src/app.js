'use strict';

var appName = 'sample-angular';
var angular = require('angular');

require('angular-resource');
require('mi-angular-resource-builder');
require('angular-ui-router');

var requires = [
    'ngResource',
    'mi.ResourceBuilder',
    'ui.router',
    require('./shared').name, //module shared -> eigener Ordner
    require('./components').name //module shared -> eigener Ordner
];

angular.module(appName, requires);

angular.bootstrap(document, [appName]);