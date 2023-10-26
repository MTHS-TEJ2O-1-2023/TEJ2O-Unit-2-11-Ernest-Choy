"""
Created by: Mr. Coxall
Created on: Sep 2020
This module is a Micro:bit MicroPython program
"""

from microbit import *
import random

# variables
numberOne = random.randint(1, 99)
numberTwo = random.randint(1, 99)

# setup
display.clear()
display.show(Image.HAPPY)


while True:
    # on button A press
    if button_a.is_pressed():
        display.clear()
        display.scroll("1:" + str(numberOne))
        display.show(Image.HAPPY)

    # on button B press
    if button_b.is_pressed():
        display.clear()
        display.scroll("2:" + str(numberTwo))
        display.show(Image.HAPPY)

    # on Shake
    gesture = accelerometer.current_gesture()
    if accelerometer.was_gesture("shake"):
        if numberOne < numberTwo:
            display.clear()
            display.scroll(str(numberOne) + "<" + str(numberTwo))
        else:
            display.scroll(str(numberOne) + ">" + str(numberTwo))
    display.show(Image.SAD)
