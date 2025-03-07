basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (maqueen.Ultrasonic() < 10) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 82)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(500)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 120)
})
