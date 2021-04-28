# Raspberry Pi controller

# Hardware
 - Raspberry Pi Zero W
 - 6 buttons
 - Breaboard
 - Cables

A preview of what the circuit looks like
![rpi_controller](https://user-images.githubusercontent.com/17506744/116475899-eccccb00-a826-11eb-99be-1b124e40cdab.jpg)

# Software
The software for the controller is split up into two parts. There is code that runs on the computer you want to have simulated keypress, and code that is run on the controller itself.
## Controller (Python)
The controller sends out button presses every 500ms, this is terrible latency for actually trying to play games and the code on the desktop side needs to be reworked eventually to support faster response times.

## Desktop (NodeJS)
The desktop client spins up a UDP server and listens for inputs from the controller, then simulates keypresses on the computer. Currently buttons are W,A,S,D, and space.
