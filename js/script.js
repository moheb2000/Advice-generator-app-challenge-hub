const btn = document.getElementById("btn");
const adviceId = document.getElementById("advice_id");
const adviceText = document.getElementById("advice_text");

btn.addEventListener("click", fetch_advice);

fetch_advice();

async function fetch_advice() {
  const adviceResponse = await fetch("https://api.adviceslip.com/advice");
  const adviceJson = await adviceResponse.json();
  console.log(adviceJson);
  adviceId.innerHTML = adviceJson.slip.id;
  adviceText.innerHTML = `"${adviceJson.slip.advice}"`;
}
