var parameters = require('./parameters.js');

/**
 * Make url to Steam Store from Params object
 * @param {Object} params
 */
function UrlHelper(params){
	this.url = "http://store.steampowered.com/search/?";

	if(!!params.tags){
		for(i = 0; i < params.tags.length; i++)
			params.tags[i] = parameters.tags.get(params.tags[i]).value
		this.url += "tags=" + params.tags.join(",") + "&";
	}
	
	if(!!params.os){
		for(i = 0; i < params.os.length; i++)
			params.os[i] = parameters.os.get(params.os[i]).value
		this.url += "os=" + params.os.join(",") + "&";
	}

	if(!!params.playerAmount)
		for(i = 0; i < params.playerAmount.length; i++)
			params.playerAmount[i] = parameters.playerAmount.get(params.playerAmount[i]).value
		this.url += "category3=" + params.playerAmount.join(",") + "&";

	if(params.gamesOnly)
		this.url += "category1=998&";
}

UrlHelper.prototype.getUrl = function(pageNb){ return this.url + "page=" + pageNb; }

module.exports = UrlHelper;