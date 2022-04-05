
function createDescription(){
    let description = document.createElement("p")
    description.innerText = "Best Pizza in Arlington,TX!"
    return description
}

function clear_children(div){
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
}
function loadHomePage(){
    
    
    let content = document.querySelector(".details")
    clear_children(content)


    let description = createDescription()
    content.appendChild(description)
}

export default loadHomePage