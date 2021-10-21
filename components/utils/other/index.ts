export function calPercentOf(currentNum : number, totalNum : number, windowHeight : number) {
    const currentReal = currentNum === 0 ? currentNum : currentNum + windowHeight
    const cal = Math.ceil((currentNum/(totalNum - windowHeight)) * 100)
    return cal
}