var mqtt = require('mqtt'),
user = require('./user.js'),
client = mqtt.connect('tcp://'+user.username+':'+user.password+'@free.mqtt.shiguredo.jp:1883'),
topic = '/' + user.username + '/';

client.on('connect', function(){
	console.log('connect');
});

client.subscribe(topic, function(err, granted){
	console.log('subscribe', err, granted);
});

client.on('message', function(topicc, message){
	console.log(topicc, message);
});
