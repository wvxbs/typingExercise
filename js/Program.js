import { Palindromes } from './Palindromes.js'
import { RenderResults } from './RenderResults.js'
import { Sort } from './Sort.js'

window.onload = () => {
    
    var Ex1 = [1232, 121, 96235, 72627, 801108, 523925, 9, 865568]
    var Ex2 = ["a", "ama", "ralar", "aprovado", "rodador", "reter", "aprenda", "selecionado", "mussum"]
    
    var Ex3 = [4, 7, 17, 9, 79, 95, 4, 66, 36, 17, 70, 51, 24, 35, 65, 64, 60, 19, 27, 1]
    var Ex4 = ['V','Q','P','U','S','E','B','I','J','C','N','Z','X','T','F','A','K','W','L','Y']
    
    var Exercise1Results = {
        "List" : Ex1,
        "Palindromes" : Palindromes(Ex1)
    }
    var Exercise2Results = {
        "List" : Ex2,
        "Palindromes" : Palindromes(Ex2)
    }

    var Exercise3Results = {
        "List" : Ex3,
        "Ordened" : Sort(Ex3)
    }

    var Exercise4Results = {
        "List" : Ex4,
        "Ordened" : Sort(Ex4)
    }

    RenderResults(Exercise1Results, Exercise2Results, Exercise3Results, Exercise4Results)

}