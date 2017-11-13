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

// $.ajax({
// 	url: 'http://messenger.api.niamor.com/getMessages',
// 	method: 'post',
// 	data: {
// 		authKey: "gFe85722f5247b18a4e525ebd12965db",
// 		lastId: 0
// 	}
// }).done(function(messages) {
// 	for(i = 0; i < messages.length; i++) {
// 		console.log(messages[i]);
// 	};	
// });