function createHeader(){
    let header = document.createElement("h1")
    header.textContent = "Marcos Pizza"
    return header
}

function nav_bar(){
    let navBar = document.createElement('nav')
    navBar.classList.add('navBar')

    let homeButton = document.createElement('button')
    homeButton.innerText = "Home"
    homeButton.setAttribute('id','home')
    //homeButton.addEventListener("click", console.log("Choose home"))

    let menuButton = document.createElement('button')
    menuButton.innerHTML = "Menu"
    menuButton.setAttribute('id','menu')
    //menuButton.addEventListener("click", console.log("Choose menu"))
    

    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)

    return navBar
}

function initialize_page(){
    let content = document.getElementById("content")
    let header = createHeader()
    let navBar = nav_bar()
    let details = document.createElement("div")
    details.classList.add("details")

    content.appendChild(header)
    content.appendChild(navBar)
    content.append(details)



}

export default initialize_page
