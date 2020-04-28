export const RenderResults = () => {
    //var div = document.createElement('div')
    //div.id = 'container'
    //div.innerHTML = 'Hi there!'
    //div.className = 'border pad'

    //document.body.appendChild(div)
    renderEx1("Boa fiote")
    renderEx2("BOa fião")

}

const renderEx1 = (title) => {
    document.getElementById("ex1Title").innerHTML += `<h1 class="title">${title}</h1>`

    document.getElementById("ex1Content").innerHTML +=  
    `<h3 class="is-size-2">${"whoa"}</h3>`
}

const renderEx2 = (title) => {
    document.getElementById("ex2Content").innerHTML +=  
    `<h1 class="title">${title}</h1>` 
}