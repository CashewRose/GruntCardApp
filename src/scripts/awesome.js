/* Modules

    1. Creating Fragments
    2. Creating components with facories
    3. Adding event listeners to components
    4. Adding components to DOM
    5. Clearing fields
*/

const DomBuilder = require("./DomBuilder")
const CardFactory = require("./CardFactory")
const ButtonFactory = require("./ButtonFactory")
const InputFieldFactory = require("./InputFieldFactory");

// Final output DOM component reference
const output = document.querySelector(".output");

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment();

const inputInfo = InputFieldFactory("input--text", "Enter card text here", "text" )
fragment.appendChild(inputInfo)
output.appendChild(fragment)

// Create the button comp
const createCardButton = ButtonFactory("button--submit", "Create Card", function () {
    // 1. Get value of button field
        const cardInfo = inputInfo.value
    // 2. Create card component with text inside
        output.appendChild(CardFactory("card", cardInfo))
        inputInfo.value = ""
    }
)
// Append input field and button to fragment
fragment.appendChild(inputInfo)
fragment.appendChild(createCardButton)
// Append fragment to DOM
DomBuilder(fragment, ".output")