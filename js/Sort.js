export const Sort = Arr => {
    var Sorted = Sorter(Arr)
    var Biggest = getBiggestItem(Sorted) 

    return Biggest

}

const Sorter = Arr => {
    var Sorted = Arr.sort((a, b) => a-b)
    
    return Sorted

}

const getBiggestItem = Arr => {
    var Item = Arr.slice(-1)

    return Item
}