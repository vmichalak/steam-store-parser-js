var parser = require('../index.js');

var params = {
	tags: [
		'indie',
		'platformer'
	],
	os: [
		'windows'
	],
	playerAmount: [
		'singleplayer'
	],
	gamesOnly: true
}

parser(params, function(err, list){
	if(err){ console.log(err); }

	list.forEach(function(item){
		console.log(item.toString());
	});
	console.log("total nb: " + list.length);
});