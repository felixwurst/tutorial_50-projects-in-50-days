const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

// using .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then(resp => resp.json())
//     .then(data => {
//       jokeElement.innerHTML = data.joke;
//     });
// }

// using async/await
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const resp = await fetch('https://icanhazdadjoke.com', config);
  const data = await resp.json();
  jokeElement.innerHTML = data.joke;
}
