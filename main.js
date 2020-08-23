// Clone the node containing the recipe
const CloneRecipe = className => {
    let original = document.querySelector(className) 
    let clone = original.cloneNode(true)
    
    return clone
}

// Create a modal popup window that includes the content provided in the parameter
const CreateModal = content => {
    let modal = document.createElement("div")
    let modalStyle = document.createElement("style")

    modal.setAttribute("class", "recipe-modal")
    modal.appendChild(content)
    document.getElementsByTagName('head')[0].appendChild(modalStyle);

    document.body.insertBefore(modal, document.body.firstChild)
    modal.nextSibling.setAttribute("id", "body-wrapper")
}

// Create the parts of the recipe 
let test = CloneRecipe(".wprm-recipe-container")
CreateModal(test)

// Close recipe when clicking outside of the window
window.addEventListener('click', (event) => {
    let modal = document.getElementsByClassName('recipe-modal')
    let bodywrapper = document.getElementById('body-wrapper')
    if (event.target !== modal) {
        modal[0].style.display = "none";
        bodywrapper.removeAttribute("id");
    }
})

