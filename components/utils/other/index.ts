export function calPercentOf(currentNum : number, totalNum : number) {
    return Math.floor(((currentNum/(totalNum - (24/100 * totalNum))) * 100/100) * 100)
}