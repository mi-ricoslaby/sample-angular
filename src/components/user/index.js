'use strict';

module.exports = angular.module('user', [])
    .controller('UserListController', require('./controller/UserListController'))
    .resolve({
            userList: function () {
                return ['a', 'b'];
            }
        }
    );