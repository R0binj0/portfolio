var aText = new Array(
"",
"Welcome to my portfolio! My name is Robin Pruunlep",
);
var iSpeed = 30;
var iIndex = 0; 
var iArrLength = aText[1].length; 
var iTextPos = 0; 
var sContents = '';
var aText2 = new Array(
    "",
    "I am a junior software developer. And I am passionate about creating innovative solutions to complex problems and continuously learning new technologies to improve my skills.",
    );
var iArrLength2 = aText2[1].length;  
     
function typewriter()
{
    sContents =  ' ';

    var destination = document.getElementById("typedtext");
    
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
        iText.Pos = 0;
        iIndex++;
    if ( iIndex != aText.length ) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 100);
    }
    } else {
    setTimeout("typewriter()", iSpeed);
    }
}
     
function typewriter2()
{
    sContents =  ' ';

    var destination = document.getElementById("typedtext2");
    
    destination.innerHTML = sContents + aText2[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength2 ) {
        iTextPos = 0;
        iIndex++;
    if ( iIndex != aText2.length ) {
        iArrLength2 = aText2[iIndex].length;
        setTimeout("typewriter2()", 100);
    }
    } else {
        setTimeout("typewriter2()", iSpeed);
    }
}

typewriter();
typewriter2();