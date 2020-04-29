import { Palindromes } from './Palindromes.js'
import { RenderResults } from './RenderResults.js'
import { Sort } from './Sort.js'

window.onload = () => {
    
    let Ex1 = [1232, 121, 96235, 72627, 801108, 523925, 9, 865568]
    let Ex2 = ["a", "ama", "ralar", "aprovado", "rodador", "reter", "aprenda", "selecionado", "mussum"]
    let Ex3 = [4, 7, 17, 9, 79, 95, 4, 66, 36, 17, 70, 51, 24, 35, 65, 64, 60, 19, 27, 1]

    let Exercise1Results = {
        "List" : Ex1,
        "Palindromes" : Palindromes(Ex1)
    }
    let Exercise2Results = {
        "List" : Ex2,
        "Palindromes" : Palindromes(Ex2)
    }

    Sort(Ex3)

    RenderResults(Exercise1Results, Exercise2Results)

}