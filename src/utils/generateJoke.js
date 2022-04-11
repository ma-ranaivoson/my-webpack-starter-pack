import axios from 'axios';

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  console.log('fetch');
  axios
    .get('https://icanhazdadjoke.com', config)
    .then((res) => {
      document.getElementById('jokeDiv').innerText = res.data.joke;
    })
    .catch((error) => console.error(error));
}

export default generateJoke;
