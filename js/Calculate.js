export const Calculate = Arr => {
    let Palindromes = getPalindromes(Arr)
    return Palindromes 

}

const getPalindromes = Arr => {
    let Palindromes = []
    var Compare = ""

    Arr.map(res => {                
        Compare = reverseString(res.toString())

        if(res.toString() == Compare) {
            Palindromes.push(res)
        }

    })

    return Palindromes

}

const reverseString = str => {
    var ReversedString = str
        .split("")
        .reverse()
        .join()
        .replace(/,/g, '')

    return ReversedString

}