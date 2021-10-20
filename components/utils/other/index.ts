export function calPercentOf(currentNum : number, totalNum : number, windowHeight : number) {
    const currentReal = currentNum + windowHeight
    const cal = Math.ceil((currentReal/totalNum) * 100)
    console.log({ currentReal, totalNum, windowHeight, cal })
    return cal
}