from gpiozero import Button, DigitalInputDevice
from time import sleep
import socket
import json
UDP_IP = "192.168.1.145"
UDP_PORT = 2222

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# buttonA = Button(14)
# joystickUp = DigitalInputDevice(15)
# joystickSide = DigitalInputDevice(18)
buttons = {'down': Button(14),'left': Button(15), 'up': Button(18), 'right': Button(2), 'a': Button(3), 'b': Button(4)}

while True:
    pressed_buttons = []
    for key,value in buttons.items():
        if(value.is_pressed):
            pressed_buttons.append(key)
    print(pressed_buttons)
    if pressed_buttons: 
        sock.sendto(json.dumps({"buttons": pressed_buttons}).encode(), (UDP_IP, UDP_PORT))
    sleep(0.3)