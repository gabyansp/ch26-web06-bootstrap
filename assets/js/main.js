console.log("Hola desde un script externo");

function changeColorTo(color){
    const refName = document.getElementById("name");

    refName.style.color =color;
}

function changeColorParagraph(color, refObj){
    console.log(refObj);
    refObj.style.color = color;
}
function resetColors(){
    const refObj = document.getElementsByClassName("text-color");
    console.log(refObj);
    for (let index = 0; index < refObj.length; index++) {
        const element = refObj[index];
        element.style.color = "purple";
        
    }
}