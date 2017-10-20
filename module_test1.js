/**
 * http://usejsdoc.org/
 */

var user1 = require('./user1');


function showUser(){
	return user1.getUser().name + ', ' + user1.group.name;
};

console.log('사용자정보 : %s', showUser());