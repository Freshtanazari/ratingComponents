var submit = document.getElementsByClassName("submit");
var submission = document.getElementsByClassName("submission");
var thankYou = document.getElementsByClassName("thank-you");

submit[0].addEventListener("click", function (){
    var val3 = document.getElementById("rate").innerHTML;
    if (val3 == "rating"){
    submit[0].style.cursor ="not-allowed";
}else{
    submission[0].style.display = "none";
    thankYou[0].style.display = "contents";
}});

function getval(val){
    var buttons = document.getElementsByClassName("rating");
    for(i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "hsl(216, 12%, 54%)";
     }
    document.getElementById("rate").innerHTML = val.value;
    val.style.backgroundColor=" hsl(25, 97%, 53%)";
    val.style.opacity = "1";
}