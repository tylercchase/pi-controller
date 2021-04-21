const udp = require('dgram')

const server = udp.createSocket('udp4')
const robot = require('robotjs')

function clearKeyboard() {
  const keys = ['w','a','s','d','space']
  for (let i = 0; i < keys.length; i++) {
    robot.keyToggle(keys[i], 'up')
  }
}

server.on('error', function (error) {
  console.log('Error: ' + error)
  server.close()
})

server.on('message', function (msg, info) {
  msg = JSON.parse(msg)
  msg.buttons.forEach(button => {
    switch (button) {
      case 'up':
        robot.keyToggle('w', 'down')
        break
      case 'down':
        robot.keyToggle('s', 'down')
        break
      case 'left':
        robot.keyToggle('a', 'down')
        break
      case 'right':
        robot.keyToggle('d', 'down')
        break
      case 'b':
        robot.keyToggle('space', 'down')
        break
      default:
        break
    }
    setTimeout(clearKeyboard, 500)
  })
})

server.on('listening', function () {
  const address = server.address()
  const port = address.port
  const family = address.family
  const ipaddr = address.address
  console.log('Server is listening at port' + port)
  console.log('Server ip :' + ipaddr)
  console.log('Server is IP4/IP6 : ' + family)
})

server.on('close', function () {
  console.log('Socket is closed !')
})

server.bind(2222)
