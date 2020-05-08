export const Palindromes = Arr => {
    var Palindromes = getPalindromes(Arr)
    return Palindromes 

}

const getPalindromes = Arr => {
    var Palindromes = []
    var Compare = ""

    Arr.map(res => {                
        Compare = reverseString(res.toString())
        if(res.toString() == Compare) {
            Palindromes.push(res)
        }})

    return Palindromes

}

const reverseString = str => {
    var ReversedString = str
    .split("")
    .reverse()
    .join("")
    
    return ReversedString

}