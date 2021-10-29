def on_data_received():
    if serial.read_line() == "thunderstorm":
        radio.send_string("thunderstorm")
        basic.show_leds("""
            . # # . .
                        # # # # .
                        . # # # #
                        . . . . .
                        . . . . .
        """)
    elif serial.read_line() == "sunrise":
        radio.send_string("sunrise")
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . # # # .
                        # # # # #
                        # # # # #
        """)
    elif serial.read_line() == "danceparty":
        radio.send_string("danceparty")
        basic.show_icon(IconNames.CHESSBOARD)
    elif serial.read_line() == "clear":
        radio.send_string("clear")
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
    else:
        basic.show_icon(IconNames.NO)
serial.on_data_received(serial.delimiters(Delimiters.NEW_LINE), on_data_received)

radio.set_group(42)
serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BAUD_RATE9600)

def on_forever():
    pass
basic.forever(on_forever)
