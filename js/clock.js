let person = prompt("Lütfen isminizi giriniz", "isim");

document.getElementById("myName").innerHTML = person;


function showTime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("myClock").innerHTML = time;
    setTimeout(showTime,1000);
    return time;
}

