export const Sort = Arr => {
    var Sorted = Sorter(Arr)
    var Biggest = getBiggestItem(Sorted) 

    return Biggest

}

const Sorter = Arr => {
    var Sorter = []
    if(typeof(Arr[0])=="string") 
        Sorter = Arr.sort()
    else 
        Sorter.push(Math.max.apply(null, Arr))

    return Sorter

}

const getBiggestItem = Arr => {
    var Item = Arr.slice(-1)

    return Item
}