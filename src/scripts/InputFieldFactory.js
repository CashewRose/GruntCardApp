// Create input component
const inputFieldFactory = (classList, defaultPlaceHolderText, type) => {
    const inputField = document.createElement("input");
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.placeholder = defaultPlaceHolderText
    return inputField
}

module.exports = inputFieldFactory