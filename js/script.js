let menuBtns = document.querySelectorAll(".menu-item"),
AnswerHolder = document.getElementById("prompt"),
question = prompt("Как вы относитесь к технике Apple?", ""),
ul = document.querySelector(".menu");

console.log(AnswerHolder);
console.log(question);

let btn = document.createElement("li");
btn.classList.add("menu-item");

ul.appendChild(btn);

btn.innerHTML="Пятый пункт ";
console.log(ul);

ul.insertBefore (menuBtns[2], menuBtns[1] );

document.body.style.backgroundImage = "url(../img/apple_true.jpg)";

document.querySelector("#title").textContent = "Мы продаем только подлинную технику Apple";

document.querySelector(".adv").remove();

AnswerHolder.innerHTML = `<h1>${question}</h1>`;




