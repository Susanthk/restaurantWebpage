


function createHeader(){
    let header = document.createElement("h1")
    header.textContent = "Marcos Pizza"
    return header
}

function createDescription(){
    let description = document.createElement("p")
    description.innerText = "Best Pizza in Arlington,TX!"
    return description
}

function loadHomePage(){
    
    let content = document.querySelector("#content")

    let header = createHeader()
    content.appendChild(header)

    let description = createDescription()
    content.appendChild(description)
}

export default loadHomePage