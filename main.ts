input.onGesture(Gesture.EightG, function () {
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("LOW POWER MODE")
    power.lowPowerPause(60000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    faces.showEyes(faces.Eyes.Open)
    faces.showMouth(faces.Mouth.Flat)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index < 2; index++) {
        input.calibrateCompass()
    }
    basic.showString("NICE")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . # . # .
        `)
    basic.clearScreen()
})
basic.clearScreen()
basic.showString("HELLO WORLD!")
basic.clearScreen()
basic.forever(function () {
    if (input.logoIsPressed()) {
        record.setMicGain(record.AudioLevels.Low)
        record.startRecording(record.BlockingState.Blocking)
        record.playAudio(record.BlockingState.Blocking)
    }
})
basic.forever(function () {
    led.setBrightness(255)
})
