// SETUP =====================================================================
// Get all tools we need
var cheerio = require('cheerio');
var request = require('request');
var Game = require('./Game.js');
var UrlHelper = require('./UrlHelper.js');

// FUNCTIONS =================================================================
/**
 * Parses Steam's web store to get lists of games from categories or keywords.
 * This function get the total nb of pages and start the recursive parse function.
 * @param  {Object}  	params
 * @param  {Function}	callback(error, list)
 */
var parse = function (params, callback){
	var list = [];
	var url = new UrlHelper(params);

	request(url.getUrl(1), function(error, response, html){
		if (error) { callback(error); };

		var totalPageNb = cheerio.load(html)('.search_pagination_right a')[2].children[0].data;

		parsePageBetween(url, list, 1, totalPageNb, callback);
	});
}

/**
 * Recursive parse function
 */
var parsePageBetween = function(url, list, start, end, callback){
	if(start <= end){
		request(url.getUrl(start), function(error, response, html){
			if (error) { callback(error); };

			var $ = cheerio.load(html);

			$('a.search_result_row').each(function(i, entry){
				var steamappId = $(this).attr('data-ds-appid');
				var title = $(this).find('.ellipsis > span')[0].children[0].data;
				list.push(new Game(title, steamappId));
			})

			parsePageBetween(url, list, start + 1, end, callback);
		});
	}
	else
	{
		callback(null, list);
	}
}

// EXPORT ====================================================================
module.exports = parse;