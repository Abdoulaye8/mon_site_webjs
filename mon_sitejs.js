
const container = document.getElementById('jokes');

const buttonReload = document.getElementById('reloadJokes');
buttonReload.addEventListener("click", function () {
    container.innerHTML = '';


    getJokes(5);
});

function displayJoke(question, answer, index) {
    const child = document.createElement('card');
    container.appendChild(child);

    child.innerHTML = `${index}: <p>${question}</p><p>${answer}</p>`;
}
function getJoke(index) {
    fetch("https://v2.jokeapi.dev/joke/Any?lang=fr")
        .then(res => res.json())
        .then(function (json) {
            displayJoke(json.setup, json.delivery, index);
        });
}

function getJokes(jokeNum) {
    for (let i = 0; i < jokeNum; i++) {
        getJoke(i + 1);
    }
}

getJokes(5); 
