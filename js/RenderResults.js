export const RenderResults = (Results1, Results2) => {
    //var div = document.createElement('div')
    //div.Id = 'container'
    //div.innerHTML = 'Hi there!'
    //div.className = 'border pad'

    //document.body.appendChild(div)
    renderEx1(1, "Palindromos numéricos", Results1)
    renderEx2(2, "Palindromos textuais", Results2)

}

const renderEx1 = (Id, Title, Results) => {
    genericTitle(Id, Title)
    genericBodyContent(Id, Results)
}

const renderEx2 = (Id, Title, Results) => {
    genericTitle(Id, Title)
    genericBodyContent(Id, Results)
}

const genericTitle = (Id, title) => {
    document.getElementById(`ex${Id}Title`).innerHTML += `<h1 class="title"><b>${title}:</b></h1>`    
}

const genericBodyContent = (Id, Results) => {
    Results.map(item => {
        document.getElementById(`ex${Id}Content`).innerHTML +=  
        `<hr><h3 class="is-size-3">${item}</h3>`
    })
}