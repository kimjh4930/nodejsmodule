/**
 * http://usejsdoc.org/
 */

var user = require('./user1');

function showUser(){
	return user.gerUser().name + ',' + user.group.name;
}

console.log('사용자정보 : %s', showUser());