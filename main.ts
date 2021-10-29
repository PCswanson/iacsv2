serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    currentCommand = serial.readLine()
    if (busy == 0) {
        busy = 1
        if (currentCommand == "thunderstorm") {
            radio.sendString("thunderstorm")
            basic.showLeds(`
                . # # . .
                # # # # .
                . # # # #
                . . . . .
                . . . . .
                `)
        } else if (currentCommand == "sunrise") {
            radio.sendString("sunrise")
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                `)
        } else if (currentCommand == "danceparty") {
            radio.sendString("danceparty")
            basic.showIcon(IconNames.Chessboard)
        } else if (currentCommand == "red") {
            radio.sendString("red")
            basic.showString("r")
        } else if (currentCommand == "green") {
            radio.sendString("green")
            basic.showString("g")
        } else if (currentCommand == "blue") {
            radio.sendString("blue")
            basic.showString("b")
        } else if (currentCommand == "yellow") {
            radio.sendString("yellow")
            basic.showString("y")
        } else if (currentCommand == "orange") {
            radio.sendString("orange")
            basic.showString("o")
        } else if (currentCommand == "violet") {
            radio.sendString("violet")
            basic.showString("v")
        } else if (currentCommand == "off") {
            radio.sendString("off")
            basic.showString("f")
        } else {
            basic.showIcon(IconNames.No)
        }
    } else {
        busy = 0
        radio.sendString("clear")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let currentCommand = ""
let busy = 0
radio.setGroup(42)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
busy = 0
basic.forever(function () {
	
})
