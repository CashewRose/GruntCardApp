// Final output DOM component reference
const output = document.querySelector(".output");

// Fragment to hold all the stuff so we inject into the DOM once
const fragment = document.createDocumentFragment();

// Create factory function to generate components


// Create input component
const inputFieldFactory = (classList, defaultPlaceHolderText, type) => {
    const inputField = document.createElement("input");
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceHolderText
    return inputField
}
const inputInfo = inputFieldFactory("input--text", "Enter card text here", "text" )
fragment.appendChild(inputInfo)
output.appendChild(fragment)
// Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button");
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}
const createCardButton = buttonFactory("button--submit", "Create Card")
fragment.appendChild(createCardButton);
output.appendChild(fragment)

// Attach event listener to button
// 1. Get value of button field
// 2. Create card component with text inside

const cardFactory = (classList, textContent) => {
    const theSection = document.createElement("section");
    theSection.classList = classList
    theSection.textContent = textContent
    return theSection
}
createCardButton.addEventListener("click", function () {
    const cardInfo = inputInfo.value
    output.appendChild(cardFactory("card", cardInfo))

    inputInfo.value = ""

});

fragment.appendChild(inputInfo)
fragment.appendChild(createCardButton)
output.appendChild(fragment)



// Create card component