console.log("Content-Script started");
console.log(window.getSelection().toString());

document.onmouseup = highlightHandler;
document.onscroll = onscrollHandler;

var btn;
var t;
var translate;

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



    fetch("https://product.v-coverhealth.com/" + 'translate', {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Header': 'X-Requested-With,content-type',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Text: `${text}`,
            SourceLanguageCode: "auto",
            TargetLanguageCode: "en"
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
            btn = document.createElement("BUTTON")
            console.log("Test");
            translate = responseData
            t = document.createTextNode(`${translate}`);
            btn.style.position = "fixed";
            btn.style.left = x + "px";
            btn.style.top = y + "px";
            btn.appendChild(t);

            //Appending to DOM 
            document.body.appendChild(btn);
            console.info(JSON.stringify(responseData, null, 2));

            if (responseData.status === 200) {

            } else if (responseData.status === 400) {
                console.info(responseData.validationErrors);

            } else if (responseData.message === 'User already registered') {
                console.log("responseData.validationErrors");
            } else {
                console.log("else");
            }
        })
        .catch((error) => {
            console.log("Error")
            console.log(error);
        });




}