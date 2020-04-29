export const Calculate = Arr => {
    let Palindromes = getPalindromes(Arr)
    return Palindromes 

}

const getPalindromes = Arr => {
    let Palindromes = []
    var Compare = ""

    Arr.map((item, i) => {                
        Compare = reverseString(item.toString())

        if(item.toString() == Compare) {
            Palindromes.push(item)
        }

    })

    return Palindromes

}

const reverseString = str => {
    var ReversedString = str.split("").reverse()

    return ReversedString //.replace(",", "")

}