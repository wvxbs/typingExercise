export const RenderResults = (Results1, Results2) => {
    //var div = document.createElement('div')
    //div.Id = 'container'
    //div.innerHTML = 'Hi there!'
    //div.className = 'border pad'

    //document.body.appendChild(div)
    renderEx1(1, "Palindromos numéricos","Números Originais",  Results1)
    renderEx2(2, "Palindromos textuais", "Palavras Originais", Results2)

}

const renderEx1 = (Id, Title, Title2, Results) => {
    genericTitle(Id, Title)
    genericPrimaryContent(Id, Results.Palindromes)
    genericSecondaryContent(Id, Results.List, Title2)

}

const renderEx2 = (Id, Title, Title2, Results) => {
    genericTitle(Id, Title)
    genericPrimaryContent(Id, Results.Palindromes)
    genericSecondaryContent(Id, Results.List, Title2)
}

const genericTitle = (Id, Title) => {
    document.getElementById(`ex${Id}Title`).innerHTML += `<h1 class="title"><b>${Title}:</b></h1>`    
}

const genericPrimaryContent = (Id, Results) => {
    Results.map(item => {
        document.getElementById(`ex${Id}Content`).innerHTML +=  
        `<hr><h3 class="is-size-4">${item}</h3>`
    })
}

const genericSecondaryContent = (Id, Results, Title) => {
    document.getElementById(`ex${Id}List`).innerHTML += `<h1 class="Title"><b>${Title}:</b></h1>`
    
    Results.map(item => {
        document.getElementById(`ex${Id}List`).innerHTML +=  
        `<h3 class="is-size-6">${item}</h3>`
    })
}