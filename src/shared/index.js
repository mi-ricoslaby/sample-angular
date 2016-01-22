'use strict';

module.exports = require('angular')
    .module('shared', [
        require('./resource').name
    ]) //modulename + Kindelemente

    .config(['ResourceBuilderProvider', function (ResourceBuilderProvider) {
            var resources = require('./resource/index.js');
            ResourceBuilderProvider.addResources(resources);
        }
        ]
    );