export function calPercentOf(currentNum : number, totalNum : number, windowHeight : number) {
    const cal = Math.ceil((currentNum/(totalNum - windowHeight)) * 100)
    return cal >= 100 ? 100 : cal
}