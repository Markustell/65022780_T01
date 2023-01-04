const randNum = Math.floor(Math.random() * 101);
let guess_count = 1;

function GN() {
    const Guess_Number = document.getElementById("G_N").value;
   
    if(Guess_Number == randNum) {
        alert("Hello World " + randNum + " Count: " + guess_count);
    }
    else if(Guess_Number > randNum) {
        guess_count++;
        alert("มากว่า");
    }
    else {
        guess_count++;
        alert("น้อยกว่า");
    }
}