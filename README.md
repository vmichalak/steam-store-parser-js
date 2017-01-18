# steam-store-parser
*Parses Steam's web store to get lists of games from categories or keywords*

How to install the module
-------------
You can clone this repo or use npm:

    npm install steam-store-parser

How can i use the module
-------------

```javascript
// see full tag list in parameters.js
var parser = require('steam-store-parser');

var params = {
	tags: ['indie', 'platformer'], os: ['windows'], playerAmount: ['singleplayer'], gamesOnly: true
}

parser(params, function(err, list){
	if(err){ console.log(err); }

	list.forEach(function(item){
		console.log(item.toString());
	});
	console.log("total nb: " + list.length);
});
```

This work was a Node.Js portage of Koroeskohr's work in ruby available here : https://github.com/Koroeskohr/steam-store-parser

License
-------------
**Valentin Michalak**, claim no copyright and release my code into the public domain using the CC0 license. For additional information please see the link below.

http://creativecommons.org/publicdomain/zero/1.0/

*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*
