// テストはここに来ます。このパッケージが拡張機能として使用されるときにはコンパイルされません。
basic.showString('test')
basic.forever(function () {
    const temp = input.temperature()
    const fValue = myBlocks.convertTemperature(temp, TempConvertType.CtoF)
    const cValue = myBlocks.convertTemperature(fValue, TempConvertType.FtoC)
    basic.showString('T:')
    basic.showNumber(temp)
    basic.showString('C:')
    basic.showNumber(cValue)
    basic.showString('F:')
    basic.showNumber(fValue)
})
