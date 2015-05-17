require('enum').register();

var parameters = {};

parameters.tags = new Enum({
	action: 19,
	indie: 492,
	adventure: 21,
	strategy: 9,
	rpg: 122,
	simulation: 599,
	casual: 597,
	free_to_play: 113,
	singleplayer: 4182,
	mmo: 128,
	multiplayer: 3859,
	racing: 699,
	sports: 701,
	coop: 1685,
	atmospheric: 4166,
	open_world: 1695,
	puzzle: 1664,
	fps: 1663,
	platformer: 1625
});

parameters.playerAmount = new Enum({
	singleplayer: 2,
	multiplayer: 1,
	crossplatform_multiplayer: 27,
	coop: 9,
	local_coop: 24
});

parameters.os = new Enum({
	windows: 'win',
	mac: 'mac',
	linux: 'linux'
});

module.exports = parameters;