const randNum = Math.floor(Math.random() * 101);
let guess_count = 1;

function GN() {
    const Guess_Number = document.getElementById("G_N").value;
   
    if(Guess_Number == randNum) {
        alert("ถูกต้อง ค่าที่ถูกคือ : " + randNum + " คุณทายไปทั้งหมด : " + guess_count + " ครั้ง");
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