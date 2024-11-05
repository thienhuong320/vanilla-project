// main.js
import classes from "./main.module.css";

document.querySelector('#app').innerHTML = `
  <div class="${classes.container}">
      <header class="${classes.header}">
          <div class="${classes.logo}">
              <img src="logo.png" alt="Game Logo">
          </div>
          <nav class="${classes.navbar}">
              <a href="#">Home</a>
              <a href="#">Introduce</a>
              <a href="#">Games</a>
              <a href="#">Contact</a>
          </nav>
      </header>

      <section class="${classes.intro}">
          <h1>Welcome to Our Game World</h1>
          <p>Discover amazing games and immerse yourself in exciting adventures. Our platform brings you the best games with a diverse selection to explore.</p>
      </section>

      <section class="${classes.features}">
          <div class="${classes.featureBox}">
              <img src="action-game-icon.png" alt="Action Game">
              <h3>Action Games</h3>
              <p>Experience the thrill and excitement with our action-packed games.</p>
          </div>
          <div class="${classes.featureBox}">
              <img src="puzzle-game-icon.png" alt="Puzzle Game">
              <h3>Puzzle Games</h3>
              <p>Challenge your mind with a variety of fun and tricky puzzles.</p>
          </div>
          <div class="${classes.featureBox}">
              <img src="strategy-game-icon.png" alt="Strategy Game">
              <h3>Strategy Games</h3>
              <p>Use your wits and tactics to win our engaging strategy games.</p>
          </div>
      </section>
  </div>
`;
