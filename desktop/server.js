const udp = require('dgram')

const server = udp.createSocket('udp4')
const robot = require('robotjs')

server.on('error', function (error) {
  console.log('Error: ' + error)
  server.close()
})

server.on('message', function (msg, info) {
  console.log('Data received from client : ' + msg.toString())
  console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port)
  msg = JSON.parse(msg)
  msg.buttons.forEach(button => {
    switch (button) {
      case 'up':
        console.log('Button W pressed')
        robot.keyTap('w')
        break
      case 'down':
        console.log('Button A pressed')
        robot.keyTap('a')
        break
      case 'left':
        console.log('Button S pressed')
        robot.keyTap('s')
        break
      case 'right':
        console.log('Button D pressed')
        robot.keyTap('d')
        break
      case 'b':
        console.log('Button X pressed')
        robot.keyTap('space')
        break
      default:
        break
    }
  })
})
// emits when socket is ready and listening for datagram msgs
server.on('listening', function () {
  const address = server.address()
  const port = address.port
  const family = address.family
  const ipaddr = address.address
  console.log('Server is listening at port' + port)
  console.log('Server ip :' + ipaddr)
  console.log('Server is IP4/IP6 : ' + family)
})

// emits after the socket is closed using socket.close();
server.on('close', function () {
  console.log('Socket is closed !')
})

server.bind(2222)
