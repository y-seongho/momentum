$(document).ready(function () {
    renderTime()
    renderQuote()
});

'use strict';

let itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);


function addItem() {
    let item = document.querySelector(".item").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".item").value = "";
        document.querySelector(".item").focus();
    }

    showList();
}


function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".item__list").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }

}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}


let checkList = document.querySelector('.item__list');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});

//현재 시간
function renderTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11,8)
            $('#time').text(datetime)
        })
}

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `"${data['content']}"`
            let author = `- ${data['author']}- `
            $('#content').text(content)
            $('#author').text(author)
        })
}

var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
    function clock() {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        var AmPm ="AM";
        if(hours > 12){   
            var AmPm ="PM";
            hours %= 12;
        }

        Target.innerText = 
        `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

        Target_apm.innerText = `${AmPm}`;

    }
clock();
setInterval(clock, 1000); // 1초마다 실행