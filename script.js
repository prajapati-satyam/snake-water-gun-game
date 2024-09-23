let p = document.querySelectorAll('p');
let uscore = 0;
let cscore = 0;
let tie = 0;
try {
    d = localStorage.getItem('hh');
    a = localStorage.getItem("tie");
    b = localStorage.getItem("us");
    c = localStorage.getItem("cs");
    if(a === null || b === null || c === null) {
          
         uscore = 0;
         cscore = 0;
         tie = 0;

    } else {
            
        parseInt(a,b,c);
        tie = a;
        uscore = b;
        cscore = c
    }
} catch(err) {
    console.log(err)
}
// let audio = document.getElementById('au');
function randomChoise() {
    let choise = ["snake", "water", "gun"];
    let random = Math.floor(Math.random() * 3);
    // console.log(choise[random]);
    return choise[random];
}
function snakeChoose(userchoise, computerchoise) {
    // audio.play();
    userchoise = 'snake';
    computerchoise = randomChoise();
    if(computerchoise === "snake") {
        p[0].innerText = "Good Job, match tie";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        tie++;
        localStorage.setItem("tie", tie);
    } else if(computerchoise === "water" ) {
        p[0].innerText = "Well done, You won";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        uscore++;
        localStorage.setItem("us", uscore);
    } else {
        p[0].innerText = "Oops , You loose";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        cscore++;
        localStorage.setItem("cs", cscore);
    }
    // console.log(computerchoise);
}
function waterChoose(userchoise, computerchoise) {
    // audio.play();
    userchoise = "water";
    computerchoise = randomChoise();
    if (computerchoise === "snake") {
        p[0].innerText = "Oops , You loose";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        cscore++;
        localStorage.setItem("cs", cscore);
    } else if(computerchoise === "water") {
        p[0].innerText = "Good Job, match tie";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        tie++;
        localStorage.setItem("tie", tie);
    } else {
        p[0].innerText = "Well done, You won";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        uscore++;
        localStorage.setItem("us", uscore);
    }
}
function gunChoose(userchoise, computerchoise) {
    // audio.play();
    userchoise = "gun";
    computerchoise = randomChoise();
    if (computerchoise === "snake") {
        p[0].innerText = "Well done, You won";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        uscore++;
        localStorage.setItem("us", uscore);
    } else if(computerchoise === "water") {
        p[0].innerText = "Oops , You loose";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        cscore++;
        localStorage.setItem("cs", cscore);
    } else {
        p[0].innerText = "Good Job, match tie";
        p[1].innerText = `Your choise : ${userchoise}`;
        p[2].innerText = `Computer choise : ${computerchoise}`;
        tie++;
        localStorage.setItem("tie", tie);
    }
}
function scoreDisplay() {
       let span = document.querySelectorAll('span');
       span[0].innerHTML = `Your score : ${uscore}`;
       span[1].innerHTML = `Computer score : ${cscore}`;
       span[2].innerHTML = `Total tie: ${tie}`;
}
function reset() {
    let warning = confirm("All score will be reset , do you want to continue ? ");
    if(warning) {
        localStorage.setItem('tie', "0");
        localStorage.setItem('cs', "0");
        localStorage.setItem('us', "0");
        let tr = localStorage.getItem("tie");
        let cr = localStorage.getItem("cs");
        let ur = localStorage.getItem("us");
        
        uscore = parseInt(ur);
        cscore = parseInt(cr);
        tie = parseInt(tr);
        location.reload()
    } else{
        console.log("reset cancel");
    }
   

}

document.getElementById("snake").addEventListener("click", snakeChoose);
document.getElementById("snake").addEventListener("click", scoreDisplay);
document.getElementById("water").addEventListener("click", waterChoose);
document.getElementById("water").addEventListener("click", scoreDisplay);
document.getElementById("gun").addEventListener("click", gunChoose);
document.getElementById("gun").addEventListener("click", scoreDisplay);
document.getElementById('reset').addEventListener('click', reset)
// document.getElementById("copy").addEventListener("click", copySourceCode);
