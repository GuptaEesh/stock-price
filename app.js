var info = document.querySelectorAll("#input");
var output = document.querySelector("#output");
var btnSelector = document.querySelector("#btn");
var row = document.querySelector(".row");

function clickHandler() {
    if (info[0].value == 0 || info[1].value == 0 || info[2].value == 0) {
        alert("Please, fill out all the fields!");
        exit;
    }
    if (info[0].value < 0 || info[1].value < 0 || info[2].value < 0) {
        alert("Values can't be negative!");
        exit;
    }
    var buy = info[0].value;
    var noOfStocks = info[1].value;
    var sell = info[2].value;

    if (buy > sell) {
        if ((((buy - sell) / buy) * 100) >= 50) {
            row.style.display = "inherit";
            row.style.backgroundImage = "url('https://media.giphy.com/media/dJYoOVAWf2QkU/giphy.gif?cid=ecf05e47c119zowcfon70oaey0hx3ce3ua6e4sbqsqjx9nwj&rid=giphy.gif&ct=g')";
        } else {
            row.style.display = "none";
        }
        document.body.style.backgroundColor = "black";
        output.innerText = "The loss suffered is " + ((((buy - sell).toFixed(2)) * noOfStocks).toFixed(2)) + " rupees and the loss percentage is " + ((((buy - sell) / buy) * 100).toFixed(2)) + "% 😣😔";
        output.style.color = "red";
    } else {
        if ((((sell - buy) / buy) * 100) >= 50) {
            row.style.display = "inherit";
            row.style.backgroundImage = "url('https://media.giphy.com/media/3NtY188QaxDdC/giphy.gif?cid=ecf05e47c3q0wefy0bohfatlxbdcgpyvxqpktnun8avdxfy1&rid=giphy.gif&ct=g')";
        } else {
            row.style.display = "none";
        }
        document.body.style.backgroundColor = "violet";
        output.innerText = "The profit incurred is " + ((((sell - buy).toFixed(2)) * noOfStocks).toFixed(2)) + " rupees and the profit percentage is " + ((((sell - buy) / buy) * 100).toFixed(2)) + "% 😍😄🎉";
        output.style.color = "green";


    }
}

function clickHandlerT() {
    clickHandler();
}
btnSelector.addEventListener("click", clickHandlerT);