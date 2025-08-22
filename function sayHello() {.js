function sayHello() {
    alert("Hallo! Dit is mijn eerste app 🚀");
}
function voegToe() {
  const input = document.getElementById("bestellingen");
  const lijst = document.getElementById("lijst");

  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;
  
  // verwijderknop
  const btn = document.createElement("button");
  btn.textContent = "❌";
  btn.style.marginLeft = "10px";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  lijst.appendChild(li);

  input.value = "";
}