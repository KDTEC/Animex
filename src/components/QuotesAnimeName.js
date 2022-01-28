/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./searchBar.css";
import { useHistory } from "react-router-dom";

const QuotesAnimeName = () => {
    const history = useHistory();
  const [inputText, setInputText] = useState("");
  const [anime, setAnime] = useState([]);
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();

    const url = `https://animechan.vercel.app/api/quotes/anime?title=${inputText}`;

    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      console.log(responseJson);
      setAnime(responseJson);
    } catch (err) {
      console.error(err);
    }
    setInputText("");
  };
  return (
    <>
        <button className="btn search-btn" onClick={() => history.push('/')}> Home</button>
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          required
        />
        <button onClick={submitHandler} className="submit-button" type="submit">
          Search
        </button>
      </form>
      <div>
        {anime &&
          anime.map((an, index) => {
            return (
              <div className="anime" key={index}>
                <div className="quotes sign">
                  <div className="sign__word anime_name" title={an.anime}>
                    {an.anime}
                  </div>
                  <blockquote className="sign__word">{an.quote}</blockquote>
                  <div
                    className="sign__word anime_character"
                    title={an.character}
                  >
                    {an.character}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default QuotesAnimeName;
