let Light = input.lightLevel()
forever(function () {
    if (input.lightLevel() > 2 * Light) {
        light.setAll(0xffffff)
        light.setBrightness(255)
        pause(120000)
    }
})
