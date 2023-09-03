var ageInput = document.getElementsByTagName('input')[0], bY = document.getElementsByTagName('h4')[0];
var cY = 2023, mY;
console.log(ageInput);
console.log(bY);
function darh(){
    mY = cY - ageInput.value ;
    console.log(ageInput.value);
    bY.innerText = "Таны төрсөн он:" + mY;
}