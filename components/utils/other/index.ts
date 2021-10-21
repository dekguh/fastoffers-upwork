export function calPercentOf(currentNum : number, totalNum : number, windowHeight : number) {
    const cal = Math.ceil((currentNum/totalNum - currentNum) * 100)
    console.log({ totalNum, windowHeight, cal })
    return cal
}