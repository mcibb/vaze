var startJan = new Date(2022, 0, 1);
var endJan = new Date(2022, 0, 31);
var startFeb = new Date(2022, 1, 1);
var endFeb = new Date(2022, 1, 28);
var startMar = new Date(2022, 2, 1);
var endMar = new Date(2022, 2, 31);


const table = document.querySelectorAll(".table");
const week = ["Po", "Ut", "St", "Št", "Pi", "So", "Ne"];
const semester = [[], [], []];
const startEnd = [[startJan, endJan], [startFeb, endFeb], [startMar, endMar]];

for (let i = 0; i < 3; i++) {
    
    
    for (let j = 1; j <= startEnd[i][1].getDate(); j++) {
        semester[i][j] = j;
        
    }

}


for (let k = 0; k <3; k++) {

    let weekDay = [6, 2, 2];
    

    for (let l = 0; l <7; l++) {
            table[k].innerHTML += "<p class='weekDay'>" + week[l] + "</p>";
            
        }
    for (let i = 0; i < weekDay[k]-1; i++) {
        table[k].innerHTML += "<p></p>";
    } 
    for (let i = 1; i < semester[k].length; i++) {
        table[k].innerHTML += "<p class='day'>" + semester[k][i] + "</p>";
        
    }

}






let dayButtons = document.querySelectorAll(".day");
let dayPanel = document.querySelector("#dayPanel");
let dayPicked = document.querySelector("#dayPicked");
let months = document.querySelectorAll(".month");




function dayPanelCreate(i, k) {
    dayPanel.innerHTML = "";
    dayPanel.innerHTML += "<p class='panelTitleText'>" +dayButtons[i].textContent+ ". " + k + "</p>";
    dayPanel.innerHTML += "<div id='panelClose'></div>";
    dayPanel.innerHTML += "<div id='hourLines'></div>";
    let hourLines = document.querySelector("#hourLines");
    for (i = 8; i <20; i++) {
        hourLines.innerHTML += "<p class='hourLinesText'>" + i + ":⁰⁰</p>";
    }
    
    dayPanel.style.display = "grid";
    panelClose.addEventListener("click", function() {
        table[0].style.transform = "none";
        table[1].style.transform = "none";
        table[2].style.transform = "none";
        months[0].style.transform = "none";
        months[1].style.transform = "none";
        months[2].style.transform = "none";
        dayPanel.style.display = "none";
    });
}


for (let i = 0; i < dayButtons.length; i++) {
    dayButtons[i].addEventListener("click", function() {
        let k = "";
        
        if ( i < 31 ) {
            k = "Január 2022";
            table[0].style.transform = "translate(200%, 0%)";
            table[2].style.transform = "translate(-200%, 0%)";
            months[0].style.transform = "translate(200%, 0%)";
            months[2].style.transform = "translate(-200%, 0%)";
            dayPanelCreate(i, k);
            
        } else if ( i > 30 && i < 59) {
            k = "Február 2022";
            table[1].style.transform = "translate(100%, 0%)";
            table[2].style.transform = "translate(-200%, 0%)";
            table[0].style.transform = "translate(100%, 0%)";
            months[1].style.transform = "translate(100%, 0%)";
            months[2].style.transform = "translate(-200%, 0%)";
            months[0].style.transform = "translate(100%, 0%)";
            dayPanelCreate(i, k);
            
        } else if (i > 58) {
            k = "Marec 2022";
            table[1].style.transform = "none";
            table[2].style.transform = "none";
            table[0].style.transform = "none";
            months[1].style.transform = "none";
            months[2].style.transform = "none";
            months[0].style.transform = "none";
            dayPanelCreate(i, k);
        };
    
        
        
    });
    
}