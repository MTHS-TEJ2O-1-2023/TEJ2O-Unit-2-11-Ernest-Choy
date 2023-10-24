/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Erenst
 * Created on: Oct 2023
 * This program generates two numbers
*/

const numberOne = randint(1, 99)
const numberTwo = randint(1, 99)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on button A press
input.onButtonPressed(Button.A, function () {
  basic.showString("1" + (numberOne).toString())
})

// on button B press
input.onButtonPressed(Button.B, function () {
  basic.showString("2" + (numberTwo).toString())
})

input.onGesture(Gesture.Shake, function () {
  if (numberOne < numberTwo) {
    basic.showString((numberOne).toString() + "<" + (numberTwo).toString())
  }
  else {
    basic.showString((numberOne).toString() + ">" + (numberTwo).toString())
  }

basic.showIcon(IconNames.Sad)
})
