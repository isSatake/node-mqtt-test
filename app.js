var mqtt = require('mqtt'),
user = require('./user.js'),
client = mqtt.connect('tcp://'+user.username+':'+user.password+'@free.mqtt.shiguredo.jp:1883'); 

client.subscribe('message');
client.publish('message', 'hoge');

client.on('message', function(topic, message){
	console.log(message);
});
