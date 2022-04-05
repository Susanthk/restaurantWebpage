import loadHomePage from "../pages/home.js";
import initialize_page from "../pages/init_page.js"
import displayMenu from "../pages/menu.js";




function navBar(){
    let homeButton = document.querySelector("#home")
    homeButton.addEventListener("click", loadHomePage)

    let menuButton = document.querySelector("#menu")
    menuButton.addEventListener("click", displayMenu )

}

init()
function init(){

    initialize_page();
    navBar()
    loadHomePage();
    
}

