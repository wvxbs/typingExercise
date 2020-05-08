export const RenderResults = (Results1, Results2, Results3, Results4) => {
    renderEx1(1, "Palindromos numéricos","Números Originais",  Results1)
    renderEx2(2, "Palindromos textuais", "Palavras Originais", Results2)
    renderEx3(3, "Maior Número da Lista", "Lista Original de Números", Results3)
    renderEx4(4, "Maior Letra da Lista", "Lista Original de Letras", Results4)

}

const renderEx1 = (Id, Title, Subtitle, Results) => {
    genericTitle(Id, Title)
    genericPrimaryContent(Id, Results.Palindromes)
    genericSecondaryContent(Id, Results.List, Subtitle)

}

const renderEx2 = (Id, Title, Subtitle, Results) => {
    genericTitle(Id, Title)
    genericPrimaryContent(Id, Results.Palindromes)
    genericSecondaryContent(Id, Results.List, Subtitle)

}

const renderEx3 = (Id, Title, Subtitle, Results) => {
    genericTitle(Id, Title)
    genericPrimaryContent(Id, Results.Ordened)
    genericSecondaryContent(Id, Results.List, Subtitle)

}

const renderEx4 = (Id, Title, Subtitle, Results) => {
    genericTitle(Id, Title)
    genericPrimaryContent(Id, Results.Orderned)
    genericSecondaryContent(Id, Results.List, Subtitle)

}

const genericTitle = (Id, Title) => {
    document.getElementById(`ex${Id}Title`).innerHTML += `<h1 class="title"><b>${Title}:</b></h1>`

}

const genericPrimaryContent = (Id, Results) => {
    Results.map(Items => {
        document.getElementById(`ex${Id}Content`).innerHTML += `<hr><h3 class="is-size-4">${Items}</h3>`

    })

}

const genericSecondaryContent = (Id, Results, Subtitle) => {
    document.getElementById(`ex${Id}List`).innerHTML += `<h1 class="Title"><b>${Subtitle}:</b></h1>`
    
    Array.from(Results).map(Items => {
        document.getElementById(`ex${Id}List`).innerHTML += `<h3 class="is-size-6">${Items}</h3>`
        
    })
    
}