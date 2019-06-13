var Express = require('express');
var Https = require('https');
var Cors = require('cors');
var app = Express();
app.listen(3000, () => {console.log("Server started at 3000...")});

app.use(Cors());

app.get('/getSteamData', (request, response,  next) => {
	var key = '257AEBD49E4964B1F1B79EA29E992B2F';
	Https.get('https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=' + key + '&steamid=' + request.query.steamId + '&format=json' , (res) => {
	res.once("data", function(data){
		response.send(JSON.parse(data));
  });
 });
});