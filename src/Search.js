import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

export const Search = ({ hideButtons = false }) => {

  const [ {} ,dispatch]=useStateValue()
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    //alert('hi')

    dispatch({
        type : actionTypes.SET_SEARCH_TERM,
        term : input
    })

    history.push("search");
  };
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={changeHandler}
          placeholder="search here..."
        />
        <MicIcon className="search__voiceIcon" />
      </div>

      { !hideButtons ?  (
          <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm ffeeling lucky</Button>
        </div>
      ): (
        <div className="search__buttons">
        <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
        <Button className="search__buttonsHidden" variant="outlined">I'm ffeeling lucky</Button>
      </div>
      )}

    </form>
  );
};


