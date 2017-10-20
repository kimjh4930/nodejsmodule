/**
 * http://usejsdoc.org/
 */

var user = require('./user1');

console.dir(user);


function showUser(){
	return user().name + ', No Group';
};

console.log('사용자정보 : %s', showUser());