import generateJoke from "./utils/generateJoke";
import './styles/main.scss';
import laughing from'./assets/laughing.svg';

const laughImg = document.getElementById('laughImg');
laughImg.src = laughing

generateJoke();

document.getElementById('jokeBtn').addEventListener('click', e => {
  e.preventDefault();
  generateJoke();
})