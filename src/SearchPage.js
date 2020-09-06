import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import { useGoogleSearch } from "./useGoogleSearch";
import Response from "./response";
import { Link, NavLink } from "react-router-dom";
import { Search } from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

export const SearchPage = () => {
  // https://developers.google.com/custom-search/v1/using_rest
  // https://cse.google.com/cse/create/new
  const [{ term  }, dispatch] = useStateValue();

  //API call
  const { data } =useGoogleSearch(term)

  //mock api call
  //const data = Response;
  console.log("data >>>>", data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />
          <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
           
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/All">All</Link>
            </div>
            <div className="searchPage__option">
              <DescriptionIcon />
              <Link to="/News">News</Link>
            </div>
            <div className="searchPage__option">
              <ImageIcon />
              <Link to="/images">images</Link>
            </div>
            <div className="searchPage__option">
              <LocalOfferIcon />
              <Link to="/shopping">shopping</Link>
            </div>
            <div className="searchPage__option">
              <RoomIcon />
              <Link to="/maps">maps</Link>
            </div>
            <div className="searchPage__option">
              <MoreVertIcon />
              <Link to="/more">more</Link>
            </div>
          </div>
          <div className="searchPage__optionsRight">
            <div className="searchPage__option">
              <Link to="/settings">Settings</Link>
            </div>
            <div className="searchPage__option">
              <Link to="/tools">Tools</Link>
            </div>
          </div>
        </div>
        </div>
   
      </div>

      { term && (
         <div className="searchPage__results">
          <p className='searchPage__resultsCount'>
            About {data?.searchInformation.formattedTotalResults} results  ( {data?.searchInformation.formattedSearchTime} ) for {term}
          </p>
          {data?.items.map( item => (
            <div className='searchPage__result' >
              <a className='searchPage__resultLink'
              href={item.link} >
                {item.displayLink}</a> 
              <a className='searchPage__resultTitle' href={item.link} >
                <h2> {item.title}</h2>
              </a>
              <p className='searchPage__resultSnippet' >
                  {item.snippet}
                </p>
               </div>
          ))}
         </div>
      )  }

    </div>
  );
};
