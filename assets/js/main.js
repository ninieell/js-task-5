var message;
var myDate = new Date();
var day = myDate.getDay();
var month = myDate.getMonth();

if (month < 4 && (day==0 || day==5 || day==6)) {
    message = "ცივა და წავიდეთ საგუნდაოდ ან სათხილამუროდ";
}
else if (month < 8 && (day==0 || day==5 || day==6)) {
    message = "ცხელა და წავიდეთ ზღვაზე";
}
else {
    message = "ცივა";
}

document.write(message + "</br>");





var fruit =["ბანანი","მარწყვი","კივი"];
fruit.pop();
fruit.pop();
fruit.pop();
fruit.push("კივი");
fruit.push("მარწყვი");
fruit.push("ბანანი");

document.write(fruit);