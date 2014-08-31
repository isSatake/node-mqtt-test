var mqtt = require('mqtt'),
user = require('./user.js'),
client = mqtt.connect('tcp://'+user.username+':'+user.password+'@free.mqtt.shiguredo.jp:1883'),
topic = '/' + user.username + '/';

setInterval(function(){
	client.publish(topic, 'hoge');
	console.log("HOGE");
}, 1000);
