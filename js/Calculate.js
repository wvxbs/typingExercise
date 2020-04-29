export const Calculate = Arr => {
    getPalindromes(Arr)

}

const getPalindromes = Arr => {
    let Palindromes = []
    var Compare = ""

    Arr.map((item, i) => {                
        Compare = reverseString(item.toString())

        alert(Compare)

        if(item.toString() == Compare) {
            Palindromes.push(item)
        }

    })

    return Palindromes

}

const reverseString = str => {
    var ReversedString = str.split("")

    ReversedString = ReversedString.reverse()

    ReversedString = ReversedString.join()

    return ReversedString  
}