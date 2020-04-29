import { Calculate } from './Calculate.js'
import { RenderResults } from './RenderResults.js'

window.onload = () => {
    
    let NumberList = ["1232", "121", "96235", "72627", "801108", "523925", "9", "865568"]
    let Words = ["a", "ama", "ralar", "aprovado", "rodador", "reter", "aprenda", "selecionado", "mussum"]

    let Exercise1Results = Calculate(NumberList)
    let Exercise2Results = Calculate(Words)

    RenderResults(Exercise1Results, Exercise2Results)

}