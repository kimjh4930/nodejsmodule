/**
 * http://usejsdoc.org/
 */

var user = require('./user1');

console.dir(user);


function showUser(){
	return user.getUser().name + ', ' + user.group.name;
};

console.log('사용자정보 : %s', showUser());