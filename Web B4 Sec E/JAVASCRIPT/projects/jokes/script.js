let jokes = [
  "Why don’t programmers like nature? It has too many bugs.",
  "Why do Java developers wear glasses? Because they don’t C#.",
  "I told my computer I needed a break, and it froze.",
  "Debugging: Being the detective in a crime movie where you are also the murderer.",
  "Why was the JavaScript developer sad? Because they didn’t know how to null their feelings.",
  "How many programmers does it take to change a light bulb? None, it’s a hardware problem.",
  "There are only 10 kinds of people in the world: those who understand binary and those who don’t.",
  "Why did the developer go broke? Because they used up all their cache.",
  "A SQL query walks into a bar and asks: 'Can I join you?'",
  "Why did the computer show up at work late? It had a hard drive.",
];

let joke = document.getElementById("joke");

joke.innerHTML = jokes[3];

setInterval(function () {
  let randomjoke = Math.round(Math.random() * jokes.length);
  joke.innerHTML = jokes[randomjoke];
}, 5000);

function getAnotherJoke() {
  let randomjoke = Math.round(Math.random() * jokes.length);
  joke.innerHTML = jokes[randomjoke];
}
