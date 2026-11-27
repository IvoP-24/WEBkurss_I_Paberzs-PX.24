const saraksts = document.getElementById("saraksts");
const jaunais = document.querySelector("#jauns");
const pievienosanasPoga = document.querySelector("#pievienot");
const skaiti = document.getElementById("skaits");
const sajaukt = document.querySelector("#jaukt");
const kartot = document.querySelector("#kartot");


const hobiji = ["Ēdienu gatavošana", "Velobraukšana", "Gulēšana", "Filmu skatīšanās", "Videospēles"]
  skaiti.textContent = "Hobiji : " + hobiji.length;
pievienosanasPoga.addEventListener("click", function(event) { 
const teksts = jaunais.value.trim();
  if (teksts === "") {
    return; 
  }

  hobiji.push(teksts); 
  zimetSarakstu();
  skaiti.textContent = "Hobiji " + hobiji.length;
  jaunais.value = "";
});


function zimetSarakstu() { 

saraksts.innerHTML = "";

for (let i = 0;i < hobiji.length; i++) { 
console.log (i, hobiji[i]);

const li = document.createElement("li");
li.textContent = hobiji[i] + " "; 

const dzest = document.createElement("button");
dzest.textContent = "Dzest";
dzest.type = "button";

dzest.addEventListener("click", function() {

hobiji.splice(i , 1);
zimetSarakstu();
skaiti.textContent = "Hobiji: " + hobiji.length;
});

li.appendChild(dzest);
saraksts.appendChild(li);



}

}
sajaukt.addEventListener("click", function() {
for (let i = hobiji.length - 1; i > 0; i--) {
 const j = Math.floor(Math.random() * (i + 1));
 const k = hobiji[i];
 hobiji[i] = hobiji[j];
 hobiji[j] = k;
zimetSarakstu();
}
});

kartot.addEventListener("click", function () {

hobiji.sort(function (a,b) {
return a.localeCompare(b,"lv");
});

zimetSarakstu();
});




zimetSarakstu();
