/**
 * Represents a Game.
 * 
 * @param {string} title      [description]
 * @param {double} steamappId [description]
 */
function Game(title, steamappId){
	/**
	 * Game Title.
	 * @type {string}
	 */
	this.title = title;

	/**
	 * Id of the game on the Steam store.
	 * @type {double}
	 */
	this.steamappId = steamappId;
}

/**
 * Compile the Object into a String.
 * @return {String} format: [id] title
 */
Game.prototype.toString = function() {
	return "[" + this.steamappId + "] " + this.title;
};

module.exports = Game;