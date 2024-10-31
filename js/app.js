const URL = "https://api.adviceslip.com/advice";

const advice = document.getElementById("advice");
const adviceID = document.getElementById("advice-id");
const regenerateBtn = document.getElementById("regenerate");

const fetchAdvice = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            advice.innerHTML = data.slip.advice;
            adviceID.innerHTML = ` #${data.slip.id}`;
        })
        .catch(error => console.log(error));
};
fetchAdvice();

regenerateBtn.addEventListener("click", fetchAdvice);