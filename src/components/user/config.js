'use strict';

module.exports = {
    'app': {
        template: '<h1>Hello</h1>'
    },
    'app.user': {
        url: '/user',
        views: {
            'main@': {
                templateUrl: './views/user/list.html',
                controller: 'UserListController as userListVm'
            }
        }
    },
    'app.user.detail': {
        url: '/user/{userId:[0-9]{4-16}}'
    }
};