var udp = require('dgram');

var buffer = require('buffer');
const { json } = require('express');

// creating a client socket
var client = udp.createSocket('udp4');
let serverAddress = 'localhost'//'192.168.1.102'
//buffer msg
var data = Buffer.from('siddheshrane');

client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

//sending msg
client.send(data,2222,serverAddress,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

var data1 = Buffer.from('hello');
var data2 = Buffer.from('world');

//sending multiple msg
client.send([data1,data2],2222,serverAddress,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});

let datajson = Buffer.from(JSON.stringify({test: 'hi'}))
client.send(datajson,2222,serverAddress,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});