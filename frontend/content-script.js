console.log("Content-Script started");
console.log(window.getSelection().toString());

document.onmouseup = highlightHandler;

function highlightHandler(e) {
    // get the highlighted text
    var text = document.getSelection();
    // check if anything is actually highlighted
    if (text !== '') {
        // we've got a highlight, now do your stuff here
        console.log(text.toString());
        var leftAbsolute = text.getRangeAt(0).getBoundingClientRect().left;
        var bottomAbsolute = text.getRangeAt(0).getBoundingClientRect().bottom;



        var btn = document.createElement("BUTTON")
        btn.style.left = String(leftAbsolute);
        console.log(btn.style.left)
        var t = document.createTextNode("CLICK ME");
        btn.appendChild(t);
        //Appending to DOM 
        document.body.appendChild(btn);

    }
}
