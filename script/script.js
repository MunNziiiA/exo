utilisateur = {
	"id":853,
	"authKey":"082620bd8a6c7b41693f78b113d8d008",
	"username":"user5376",
	"createdAt":1510568302,
	"lastMessageAt":0
}

// $.ajax({
// 	url: 'http://messenger.api.niamor.com/createUser',
// 	method: 'post'
// }).done(function(user) {
// 	console.log(user);
// });

$('#send_button').click(function() {
	$.ajax({
		url: 'http://messenger.api.niamor.com/sendMessage',
		method: 'post',
		data: {
			authKey: utilisateur.authKey,
			to: 0,
			text: $('#send_text').val()
		}
	}).done(function(sendmessages) {
		for(i = 0; i < sendmessages.length; i++) {
			console.log(sendmessages);
		}
	});
});

var Users;

$.ajax({
	url: 'http://messenger.api.niamor.com/getUsers',
	method: 'post'
}).done(function(users) {
	for(i = 0; i < users.length; i++) {
		Users = users[i];
		// console.log(Users);
	}
	
});

$.ajax({
	url: 'http://messenger.api.niamor.com/getMessages',
	method: 'post',
	data: {
		authKey: utilisateur.authKey,
		lastId: 0
	}
}).done(function(messages) {
	for(i = 0; i < messages.length; i++) {
		console.log(messages[i]);
	};	
});