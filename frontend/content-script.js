console.log("Content-Script started");
console.log(window.getSelection().toString());

document.onmouseup = highlightHandler;
document.onscroll = onscrollHandler;

var btn;
var t;

function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();

    // check if anything is actually highlighted
    if (text.toString().length > 1) {
        // we've got a highlight, now do your stuff here
        var leftAbsolute = document.getSelection().getRangeAt(0).getBoundingClientRect().left;
        var topAbsolute = text.getRangeAt(0).getBoundingClientRect().bottom;
        console.log(text.toString())
        getButton(leftAbsolute, topAbsolute, text);
    } else {
        document.body.removeChild(btn);
    }
}

function onscrollHandler(e) {
    document.body.removeChild(btn);
}

function getButton(x, y, text) {
    btn = document.createElement("BUTTON")
    t = document.createTextNode(`${text}`);
    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.appendChild(t);
    //Appending to DOM 
    document.body.appendChild(btn);
}