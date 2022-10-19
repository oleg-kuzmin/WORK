const headingElement = document.querySelector("h1"); // поиск по тегу
const bodyElem = document.querySelector(".body"); // поиск по классу
const button = document.querySelector('#button'); // поиск по id
const button1 = document.querySelectorAll('.button'); // найдет все по классу
bodyElem.style.backgroundColor = "gray"; // синтаксис camelCase для стилей
headingElement.style.fontSize = "40px";
headingElement.style.color = "white";
headingElement.textContent = "текст";
headingElement.append("новый текст");
