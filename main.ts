basic.clearScreen()
basic.showString("22")
basic.pause(2000)
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
