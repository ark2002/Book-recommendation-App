import React, { useState } from "react";
import "./styles.css";

const bookShelf = {
  IT: [
    {
      name: "Starting out with python",
      description:
        "A clear and student-friendly introduction to the fundamentals of Python In&nbsp;Starting Out with Python&reg;, 5th Edit",
      rating: " Rating : ⭐ ⭐ ⭐ ⭐"
    },
    {
      name: "Eloquent JS",
      description:
        "This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope.",
      rating: " Rating : ⭐ ⭐ ⭐"
    },
    {
      name: "Computer Network , Global",
      description:
        "In Computer Networks,Tanenbaum et al. explain how networks work from the inside out. They start withthe physical layer of networking, computer hardware and transmission systems,then work their way up to network applications.",
      rating: "Rating :⭐ ⭐ ⭐ ⭐ ⭐"
    }
  ],
  Fiction: [
    {
      name: " The Hardy Boys : The Missing Chums",
      description:
        "The Missing Chums is volume 4 in the original The Hardy Boys Mystery Stories published by Grosset & Dunlap.",
      rating: "Rating :⭐ ⭐ ⭐ ⭐ ⭐"
    },
    {
      name: "The Return of Sherlock Holmes",
      description:
        "The Return of Sherlock Holmes is a 1905 collection of 13 Sherlock Holmes stories, originally published in 1903–1904, by Arthur Conan Doyle.",
      rating: "Rating :⭐ ⭐ ⭐ ⭐ ⭐"
    },
    {
      name: "Nancy Drew : The Bungalow Mystery",
      description:
        "The Bungalow Mystery is the third volume in the Nancy Drew Mystery Stories series written under the pseudonym Carolyn Keene.",
      rating: "Rating :⭐ ⭐ ⭐ ⭐ "
    }
  ],
  Mythology: [
    {
      name: "Mythology: Timeless Tales of Gods and Heroes",
      description:
        "Probably the most famous of all mythology books, Edith Hamilton's Mythology introduces readers to the Greek, Roman and Norse myths that are the keystone of Western culture, and the stories of gods and heroes that have inspired human creativity throughout history.",
      rating: "Rating :⭐ ⭐ ⭐ "
    },
    {
      name: "Norse Mythology",
      description:
        "A recent addition to the world of wonderful books about mythology. This one explores Norse mythology, with such familiar characters as Odin, Thor, and Loki.",
      rating: "Rating :⭐ ⭐ ⭐"
    },
    {
      name: "Mahabharta",
      description:
        "The mother of all wars, the epitome of all rivalries, the cauldron of emotions, insecurities, jealousies, and power play - Mahabharata!",
      rating: "Rating :⭐ ⭐ ⭐ ⭐ ⭐"
    }
  ]
};

var books = Object.keys(bookShelf);

export default function App() {
  const [genre, setGenre] = useState("IT");

  function bookClickHandler(genre) {
    // processing
    console.log(genre);
    setGenre(genre); // react call to show output
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="bookshelf">
          📕
        </span>{" "}
        Reader's Radar
        <hr></hr>
      </h1>
      <p>
        <i>Books on your Radar</i>
      </p>

      {books.map((genre) => {
        return (
          <button
            onClick={() => bookClickHandler(genre)}
            key={genre}
            style={{
              cursor: "pointer",
              background: "rgb(230, 230, 250)",
              marginRight: "1rem",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        );
      })}

      <hr />

      <ul style={{ paddingInlineStart: "0px", textAlign: "left" }}>
        {bookShelf[genre].map((book) => {
          return (
            <li
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "4px solid #ffffff",
                borderRadius: "1 rem",
                margin: "1rem ",
                fontSize: "larger",
                textShadow: "2px 2px 4px #000000",
                color: "white"
              }}
              key={book.name}
            >
              <div>
                <strong>{book.name}</strong>
              </div>
              <br></br>
              <div>{book.description}</div>
              <br></br>
              <div>{book.rating}</div>
              <hr></hr>
            </li>
          );
        })}
      </ul>
      <hr></hr>
    </div>
  );
}
