import { Calculate } from './Calculate.js'
import { RenderResults } from './RenderResults.js'

window.onload = () => {
    
    let NumberList = ["1232", "121", "96235", "72627", "801108", "523925", "9", "865568"]

    let Results = Calculate(NumberList)

    RenderResults(Results)

}