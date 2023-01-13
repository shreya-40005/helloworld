input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    music.playMelody("C5 A E G C D F B ", 170)
})
