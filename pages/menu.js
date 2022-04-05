
function clear_children(div){
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
}

function createMenu(){

    let item = document.createElement("div")
    item.classList.add("item")

    let itemImg = document.createElement("img")
    itemImg.setAttribute("id", "guttivankayaImg")
    itemImg.src = "../img/guttivankaya.jpeg"

    let desc = document.createElement("p")
    desc.setAttribute("id", "guttivankayaTxt")
    desc.textContent = "Egg plant curry"

    item.appendChild(itemImg)
    item.appendChild(desc)

    return item

}


function displayMenu(){
    let content = document.querySelector(".details")

    clear_children(content)

    let menu = createMenu()
    content.appendChild(menu)
}

export default displayMenu