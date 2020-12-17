import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🐱": "cat face",
  "🐶": "dog face",
  "🐯": "tiger face",
  "🐴": "horse face",
  "🐵": "monkey face",
  "🐭": "mouse face",
  "🐹": "hamster face",
  "🐰": "rabbit face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandeler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we dont know about it";
    }
    setMeaning(meaning);
  }

  function emojiClickHandeler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <header>Face Emojis Recognizer</header>

      <input
        onChange={emojiInputHandeler}
        placeholder="put face emojis to recognize "
      ></input>

      <div style={{ fontSize: "larger", margin: "1rem" }}>{meaning} </div>

      <h3>Face emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "4rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandeler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <footer>
        Made by{" "}
        <a href="https://rishiportfolio.netlify.app/">Rishi Srivastava</a>
      </footer>
    </div>
  );
}
