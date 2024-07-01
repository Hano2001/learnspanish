window.addEventListener('DOMContentLoaded', () => {
  let questionCounter = 0;
  const table = document.getElementById('questionTable');
  const tableHead = document.getElementById('wordToAnswer');
  const score = document.getElementById('score');
  let points = 0;
  let correctWord = '';
  function answer(guess, correct) {
   const correctButton = document.getElementById("btn-" + correct);
    if (guess === correct) {
      correctButton.classList.add("correct");
      points++;
    } else {
      correctButton.classList.add("incorrect");
    }
    questionCounter += 1;
    correctButton.setAttribute(disabled, "");
    score.innerHTML = points;
  }
  async function getData() {
    const data = await fetch('http://localhost:3001').then((res) =>
      res.json(),
    );
    let result = data.data.kitchen;
    const guesses = [...result].map((w) => w.spanish);
    correctWord = result[questionCounter].spanish;

    tableHead.innerHTML = result[questionCounter].english;
    const tr = document.createElement('tr');
    guesses.forEach((g) => {
      const guess = document.createElement('button');
      guess.id = "btn-" + guess
      const td = document.createElement('td');
      td.appendChild(guess);
      tr.appendChild(td);
      guess.addEventListener('click', (e) => {
        e.preventDefault();
        answer(g, correctWord);
        tableHead.innerHTML = result[questionCounter].english;
        correctWord = result[questionCounter].spanish;
      });
      guess.innerHTML = g;
      table.appendChild(tr);
    });
  }
  button = document.getElementById('fetchButton');

  button.addEventListener('click', () => {
    getData();
  });
});
