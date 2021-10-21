export function calPercentOf(currentNum : number, totalNum : number, windowHeight : number) {
    const currentReal = currentNum === 0 ? currentNum : currentNum + windowHeight
    const cal = Math.floor((currentNum/(totalNum - windowHeight)) * 100)
    console.log({ currentReal, totalNum, windowHeight, cal })
    return cal
}