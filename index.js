window.onload = function() {
    let button = document.getElementById("calculator");
    button.addEventListener("click",calculatelove)
}

function calculatelove(){
    let yourName = document.getElementById("your-name").value;
    let CrushName = document.getElementById("her-name").value;

    if(yourName != "" && CrushName != ""){
        let percentage = Math.floor(Math.random() * 101); //0.99999 * 101 = 0.100.99999
        document.getElementById("Result-Message").innerText = yourName + " And " + CrushName + "'s chance of Love:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
}