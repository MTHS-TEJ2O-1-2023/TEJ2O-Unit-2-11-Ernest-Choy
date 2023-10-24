/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Erenst
 * Created on: Oct 2023
 * This program generates two numbers
*/

// variables
const numberOne: number = randint(1, 99) 
const numberTwo: number = randint(1, 99)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on button A press
input.onButtonPressed(Button.A, function () {
  basic.showString("1:" + (numberOne).toString())
  basic.showIcon(IconNames.Happy)
})

// on button B press
input.onButtonPressed(Button.B, function () {
  basic.showString("2:" + (numberTwo).toString())
  basic.showIcon(IconNames.Happy)
})

// on Shake
input.onGesture(Gesture.Shake, function () {
  basic.clearScreen()
  if (numberOne < numberTwo) {
    basic.showString((numberOne).toString() + "<" + (numberTwo).toString())
  }
  else {
    basic.showString((numberOne).toString() + ">" + (numberTwo).toString())
  }

basic.showIcon(IconNames.Sad)
})
