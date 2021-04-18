let udp = require('dgram');

let buffer = require('buffer');
const { json } = require('express');
// let Gpio = require('onoff').Gpio;
// // creating a client socket
var client = udp.createSocket('udp4');
let serverAddress = '192.168.1.118'

// let buttonA = new Gpio(14, 'in', 'both')

// function errorChecking(err) {
//   if(err) {
//     console.error(err)
//   }
//   else {
//     console.log('Data sent!')

//   }
// }

// buttonA.watch(function(err, _value) {
//   if(err) {
//     console.error(`There was an error ${err}`)
//   } else {
//     client.send(Buffer.from(JSON.stringify({button:1,value: value})),
//     2222,serverAddress,errorChecking)
//   }
// })
client.on('message',function(msg,info){
  console.log('Data received from server : ' + msg.toString());
  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
});

let datajson = Buffer.from(JSON.stringify({test: 'hi'}))
client.send(datajson,2222,serverAddress,function(error){
  if(error){
    client.close();
  }else{
    console.log('Data sent !!!');
  }
});



// function unexportOnClose() { //function to run when exiting program
//   buttonA.unexport(); // Unexport Button GPIO to free resources
// };

// process.on('SIGINT', unexportOnClose); //function to run when user closes using