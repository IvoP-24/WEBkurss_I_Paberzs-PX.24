console.log("script.js ir pieslegts");

const ievade = document.getElementById("jauns");
const saraksts = document.getElementById("saraksts");
const zina = document.getElementById("zina");
const skaits = document.getElementById("skaits");
const poga = document.getElementById("poga");
const deleteAll = document.getElementById("deleteAll");

function atjaunotSkaitu() {
skaits.textContent = saraksts.children.length;
}

poga.addEventListener("click", function () {

const teksts = ievade.value.trim();
if (teksts === "") {
zina.textContent = "Ieraksti uzdevumu!";
return;
}

zina.textContent = "";

console.log(ievade.value);

const li = document.createElement("li");


const span = document.createElement("span");
span.textContent = teksts + " ";

li.addEventListener("click", function() {
li.classList.toggle("izdarits");
} );

const dzest = document.createElement("button");
dzest.textContent = " Dzest";

dzest.addEventListener("click", function () {

li.remove();
atjaunotSkaitu();
} );

ievade.addEventListener("keydown", function (event) { 
if (event.key === "Enter") { 
poga.click(); } 
});

dzestVisu.addEventListener("click" , function () {
saraksts.innerHTML = "";
atjaunotSkaitu();
});

li.appendChild(span);
li.appendChild(dzest);

saraksts.appendChild(li);

atjaunotSkaitu();

ievade.value = "";
ievade.focus();
} );



