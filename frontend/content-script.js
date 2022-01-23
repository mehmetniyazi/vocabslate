console.log("Content-Script started");
console.log(window.getSelection().toString());

document.onmouseup = highlightHandler;
document.onclick = denem0eee ; 
document.onscroll = onscrollHandler;

var newDiv;
var newDiv2;
var newContent;
var t;
var textDeneme;
var translate;
var translatedText;
var isRemoved = false;
var previousSelectedText;
var targetText;
var sourceText;
var saveIcon;



var someEventHander=function(){
    console.log("depşltr");
    sourceText.toString();
    targetText.toString();
    fetch("https://product.v-coverhealth.com/" + 'api/words/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZmZTcxZjMwLTdiYTktMTFlYy1hNWEzLWJmZjIxMzk5ZmYzOCIsImlhdCI6MTY0Mjg3Mjg0OCwiZXhwIjoxNjQ1NDY0ODQ4fQ.3itq0yMPEqq1OhWDL3SMmQAVGTaMxtQXQXEP2rMCdaI",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            source:sourceText.toString(),
            target:  targetText.toString()
        }),
      })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData = "Word Added Successfully") {
            saveIcon.src = "https://cdn-icons-png.flaticon.com/512/786/786352.png";
        } 
      }).catch((error) => {
        console.log("catched istek hacı")
        console.log(error);
    });
}

function denem0eee(e) {
    // get the highlighted text
    var text = document.getSelection();

   
}

function highlightHandler(e) {
    var text = document.getSelection();
    var selectedText = text.toString();
    // get the highlighted text
    if(previousSelectedText ==selectedText){

    }else{
        previousSelectedText = text.toString();
        if (text.toString().length > 1) {
            // we've got a highlight, now do your stuff here
            var leftAbsolute = document.getSelection().getRangeAt(0).getBoundingClientRect().left;
            var topAbsolute = text.getRangeAt(0).getBoundingClientRect().bottom;
            console.log(text.toString())
            getButton(leftAbsolute, topAbsolute, text);
            if(isRemoved == false){
                document.body.removeChild(newDiv);
                isRemoved = true;
            }
        }  
        else {
            isRemoved = true;
            document.body.removeChild(newDiv);
        }
    }
    
}

function onscrollHandler(e) {
    if(isRemoved != true){
        document.body.removeChild(newDiv);
        isRemoved = true;
    }
    
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
            TargetLanguageCode: "tr"
        }),
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log("Test");
            translate = responseData
            t = document.createTextNode(`${translate}`);
            initElement();
            newDiv2.innerHTML = getStyleFourInnerHtml(
                translate,false
            );
            /*newDiv2.innerHTML = getStyleTwoInnerHtml(
                text,translate,"group1","mylist",
            );*/
            //btn.appendChild(t);

            
            //Appending to DOM
            //newDiv.appendChild(voiceIcon);
            
            //newDiv.appendChild(textDeneme);
            isRemoved = false;

            newDiv.appendChild(newDiv2);
            document.body.appendChild(newDiv); 
        
            newDiv.style.position = "fixed";
            newDiv.style.left = x + "px";
            newDiv.style.top = y + "px";
            //btn.style.background = "transparent";
            //document.body.appendChild(btn);
            console.info(JSON.stringify(responseData, null, 2));
            sourceText = text;
            targetText = translate;

            saveIcon = document.getElementById("saveIcon");
            saveIcon.onclick = someEventHander;

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



function initElement(){
    newDiv = document.createElement("div");
    newDiv2 = document.createElement("div");
    // i choose to use the svg content as inner html. You may create this as an element
    //newDiv2.innerHTML = '<div> <button id="inject-file" style="position: relative;; padding-left: 28px; padding-top: 32px;">Inject file</button></div><div><button id="inject-function"style="position: relative; padding-right: 32px; margin-top: 32px;">Inject function</button></div>'
    
    //newDiv2.innerHTML = getInnerHtml();
    //childerenlar uzerinden componentler eykarı atanmalı ve ona gore click listenerlar verilmelidir.
    //inner html ile ekrana yazdırıldıktan sonra isetedğin yerden erilebilirsin.
    
    newContent = document.createTextNode("Hi there and greetings!");
}

function getFirstStyleInnerHtml(text=""){
    var firstStyle =  `
<div
     style="
  		position: relative;
        width: 320px;
        height: 120px;
        left: 43px;
        background: #27282F;
        border-radius: 20px;">

	<img 
        class="imagetoplefted"
        style="
         position: absolute;
        top: 20px;
        left: 20px;
       	filter: invert(100%);
         height: 16px;
        width: 16px;"
        src="https://cdn-icons-png.flaticon.com/512/4064/4064205.png" /> 

  <img id="imagetopright"
  	 style="
     position: absolute;
        top: 20px;
        right: 20px;
       	filter: invert(100%);
         height: 16px;
        width: 16px;"
  src="https://cdn-icons-png.flaticon.com/512/4927/4927593.png" />
    
  <p id="text" style="
  		position: absolute;
        height: 35%;
        left: 20px;  
      	right: 20px;
        bottom : 18px;
      	font-family: Red Hat Text;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.025em;
        color: #FFFFFF;">
        ${text}</p>
</div>
`;
    return firstStyle;
}






function getStyleTwoInnerHtml(
    text="",translatedText="",group="",list="",isSaved=false
){
    var secondStyle =  
    `
<div
    style="
    position: absolute;
    width: 260px;
    height: 200px;
    left: 23px;

    background: #FFFFFF;
    border: 5px solid #27282F;
    box-sizing: border-box;
    border-radius: 20px;">

   <img 
    class="imagetoplefted"
    style="
    position: absolute;
    top: 20px;
    left: 20px;
    height: 16px;
    width: 16px;"
    src="https://cdn-icons-png.flaticon.com/512/4064/4064205.png" /> 

 <img id="imagetopright"
    style="
    position: absolute;
    top: 20px;
    right: 20px;
    height: 16px;
    width: 16px;"
    src="https://cdn-icons-png.flaticon.com/512/709/709496.png" />
    
      
 <p id="title"
    style="
        position: absolute;
        width: 233px;
        height: 28px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 25px;
        display: flex;
        align-items: center;
        text-align: center;
        top:2px;
        left: 34%;
        right: 34%;
        color: #000000;
       " >Vocabslate</p>
       
       
       
 <p id="word"
    style="
        position: absolute;
        width: 305px;
        height: 45px;
        top:28px;
        left: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 42px;
        color: #27282F;
        " >${text}</p>
       
       
 <div id=group_info
     style="
        position: absolute;
        width: 200px;
        height: 24px;
        top:88px;
        left: 20px;
        " 
 >
 
    <div
     id="group_container"
        style="
            position: absolute;
            width: 80px;
            height: 24px;
            background: #FBB023;
            border-radius: 5px;
            " >
        <p id="group"
   style="
         position: relative;
         width: 105px;
         height: 18px;
         left:6px;
         top:-4px;
         font-family: Roboto;
         font-style: normal;
         font-weight: normal;
         font-size: 18px;
         display: flex;
         align-items: center;
         text-align: center;
         color: #FFFFFF;
         " >${group}</p>

         </div>
         
   
         <p id="list"
        style="
            position: absolute;
            width: 20px;
            height: 18px;
            top:-4px;
            right:56px;
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 15px;
            display: flex;
            align-items: center;
            text-align: center;
            text-decoration-line: underline;
            color: #4F5058;
         " >${list}</p>
 
 </div>
 
 
   <div id=explanation
        style="
        position: absolute;
        left: 0%;
        right: 0%;
        padding-left: -2px;
        top: 66%;
        bottom: 0%;
        background: #27282F;
       " 
 >
 
<p id="list"
   style="
        position: absolute;
        left: 8%;
        right: 8%;
        top: 13.73%;
        bottom: 14.68%;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 33px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        " >${translatedText}</p>
 
 </div>
`;
    return secondStyle;
}



function getStyleThreeInnerHtml(
    text="",translatedText="",isSaved=false
){
    var thirdStyle =  
    `
<div
    style="
    position: absolute;
    width: 260px;
    height: 140px;
    left: 23px;

    background: #FFFFFF;
    border: 5px solid #27282F;
    box-sizing: border-box;
    border-radius: 20px;">

    <img 
        class="imagetoplefted"
        style="
        position: absolute;
        top: 20px;
        left: 20px;
        height: 16px;
        width: 16px;"
        src="https://cdn-icons-png.flaticon.com/512/4064/4064205.png" /> 

    <img id="imagetopright"
        style="
        position: absolute;
        top: 20px;
        right: 20px;
        height: 16px;
        width: 16px;"
        src="https://cdn-icons-png.flaticon.com/512/709/709496.png" />
        
      
 <p id="title"
    style="
        position: absolute;
        width: 233px;
        height: 28px;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 25px;
        display: flex;
        align-items: center;
        text-align: center;
        top:12px;
        left: 34%;
        right: 34%;
        color: #000000;
       " >Vocabslate</p>
       
       
       
 <p id="word"
    style="
        position: absolute;
        width: 305px;
        height: 45px;
        top:28px;
        left: 20px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 42px;
        color: #27282F;
        " >${text}</p>
       
       
    <div id=explanation
        style="
        position: absolute;
        left: 0%;
        right: 0%;
        padding-left: -29px;
        top: 66%;
        bottom: 0%;
        background: #27282F;
       " 
 >
 
 

<p id="list"
   style="
        position: absolute;
        left: 8%;
        right: 8%;
        top: 12%;
        bottom: 14.68%;
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 33px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        " >${translatedText}</p>
 
 </div>
`;
    return thirdStyle;
}



function getStyleFourInnerHtml(translatedText = "", isSaved = false) {
    var savedIconUrl = "";
        if(isSaved){
            savedIconUrl="https://cdn-icons-png.flaticon.com/512/786/786352.png";
        }
        else {
            savedIconUrl="https://cdn-icons-png.flaticon.com/512/786/786251.png";
        }  
    var fourthStyle =  
    `
    <div
        id="innerpopupcontainer"
    style="
         position: relative;
       width: 300px;
       height: 100px;
       left: 43px;
       background: #27282F;
       border-radius: 20px;">

   <img 
       class="imagetoplefted"
       style="
        position: absolute;
       top: 20px;
       left: 20px;
          filter: invert(100%);
        height: 16px;
       width: 16px;"
       src="https://cdn-icons-png.flaticon.com/512/4064/4064205.png" />
       
 <img 
       id="saveIcon"
       style="
        position: absolute;
       top: 22px;
       left: 44px;
          filter: invert(100%);
        height: 13px;
       width: 15px;"
       src="${savedIconUrl}" />

 <img id="imagetopright"
      style="
    position: absolute;
       top: 20px;
       right: 20px;
          filter: invert(100%);
        height: 16px;
       width: 16px;"
 src="https://cdn-icons-png.flaticon.com/512/4927/4927593.png" />
   
 <p id="text" style="
         position: absolute;
       height: 35%;
       left: 20px;  
         right: 20px;
       top : 44%;
         font-family: Red Hat Text;
       font-style: normal;
       font-weight: normal;
       font-size: 14px;
       letter-spacing: 0.025em;
       color: #FFFFFF;">
       ${translatedText}</p>


</div>

`;
    return fourthStyle;
} 