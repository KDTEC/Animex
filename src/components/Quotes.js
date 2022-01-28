import React from "react";
import "./style.scss";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
const Quotes = () => {
  const history = useHistory();
  const [quote, setQuote] = useState({
    anime_name: null,
    anime_character: null,
    quotes: null,
  });

  const gimmeQuote = async () => {
    setQuote(await fetchQuote());
  };

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);
  return (
    <>
      <button
        className="btn search-btn"
        onClick={() => history.push("/QuotesAnimeName")}
      >
        {" "}
        Search Quotes by Anime Name
      </button>
      <div className="quotes sign">
        <div className="sign__word anime_name" title={quote.anime}>
          {quote.anime}
        </div>
        <blockquote className="sign__word">{quote.quote}</blockquote>
        <div className="sign__word anime_character" title={quote.character}>
          {quote.character}
        </div>
      </div>
      <div className="button-next">
        <button className="btn" onClick={gimmeQuote}>
          Gimme! Quote
        </button>
      </div>
    </>
  );
};

export default Quotes;
