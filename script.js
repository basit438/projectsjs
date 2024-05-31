const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const countryInput = document.getElementById('country');
const scoreInput = document.getElementById('score');
const addPlayerButton = document.getElementById('addPlayer');
const leaderboardBody = document.querySelector('#leaderboard tbody');
const sortByScoreButton = document.getElementById('sortByScore');

let leaderboard = [];

function addPlayer() {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const country = countryInput.value.trim();
  const score = parseInt(scoreInput.value);

  if (firstName === '' || lastName === '' || country === '' || isNaN(score)) {
    alert('Please enter all required fields and a valid score.');
    return;
  }

  const player = { firstName, lastName, country, score };
  leaderboard.push(player);

  createPlayerRow(player);

  firstNameInput.value = '';
  lastNameInput.value = '';
  countryInput.value = '';
  scoreInput.value = '';
}

function createPlayerRow(player) {
  const row = document.createElement('tr');

  const rankCell = document.createElement('td');
  rankCell.textContent = leaderboard.length;
  row.appendChild(rankCell);

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = player.firstName;
  row.appendChild(firstNameCell);

  const lastNameCell = document.createElement('td');
  lastNameCell.textContent = player.lastName;
  row.appendChild(lastNameCell);

  const countryCell = document.createElement('td');
  countryCell.textContent = player.country;
  row.appendChild(countryCell);

  const scoreCell = document.createElement('td');
  scoreCell.textContent = player.score;
  row.appendChild(scoreCell);

  leaderboardBody.appendChild(row);
}

function sortByScore() {
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboardBody.innerHTML = '';
  leaderboard.forEach(createPlayerRow);
}

addPlayerButton.addEventListener('click', addPlayer);
sortByScoreButton.addEventListener('click', sortByScore);