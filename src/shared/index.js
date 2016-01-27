'use strict';

module.exports = require('angular')
    .module('shared', [
    ]) //modulename + Kindelemente

    .config(['ResourceBuilderProvider', function (ResourceBuilderProvider) {
            var resources = require('./resource/index.js');
            ResourceBuilderProvider.addResources(resources);
        }
        ]
    );