export const Sort = Arr => {
    let Sorted = Sorter(Arr)

    return Sorted
}

let comp = 0

let Sorted = []

const Sorter = Arr => {
    Arr.map(res => {
        if(res > comp){
            Sorted.push(comp)
        }

        comp = res
    })

}