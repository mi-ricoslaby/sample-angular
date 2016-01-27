'use strict';

function UserListController() {
    var vm = this;

    console.log('UserListController');
    vm.userList = [
        { name: 'hello1' },
        { name: 'hello2' }
    ];
}

module.exports = UserListController;