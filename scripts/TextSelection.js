function selectTextOfElement(elementId) {
    var elementToSelectTextOf = document.getElementById(elementId);

    if (document.body.createTextRange) {
        selectUsingTextRange(elementToSelectTextOf);
    } else if (window.getSelection) {
        selectUsingSelection(elementToSelectTextOf);
    }
}

function selectUsingTextRange(elementToSelectTextOf) {
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(elementToSelectTextOf);
    textRange.select();
}

function selectUsingSelection(elementToSelectTextOf) {
    var textRange = document.createRange();
    textRange.selectNodeContents(elementToSelectTextOf);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(textRange);
}
