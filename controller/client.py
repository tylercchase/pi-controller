from gpiozero import Button, DigitalInputDevice
from time import sleep
import socket
import json
UDP_IP = "192.168.1.118"
UDP_PORT = 2222

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
buttonA = Button(14)
joystickUp = DigitalInputDevice(15)
joystickSide = DigitalInputDevice(18)
buttons = {'a': Button(14),b: Button(15), c: Button}
def send_data(_caller):
    sock.sendto(json.dumps({"caller": _caller}).encode(), (UDP_IP, UDP_PORT))

while True:
    if buttonA.is_pressed:
        print("Pressed")
        send_data('buttonA')
    print('up+down')
    print(joystickUp.value)
    print('side-side')
    print(joystickSide.value)
    send_data('buttonD',1)
    sleep(0.5)