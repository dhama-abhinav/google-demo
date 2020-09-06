import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core'
import { Search } from "./Search";

export const Home = () => {
  return (
    <div className="home">
      
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
            src='https://www.google.com/logos/doodles/2019/2019-icc-cricket-world-cup-begins-6508349483384832-2xa.gif'
            alt=''
        />
        <div className='home__inputContainer' >
            <Search  />
            {/* <Search hideButtons /> */}
            {/* <Search /> */}
            {/* making this as search component such that it can be ued in the other page as well */}
        </div>
      </div>
    </div>
  );
};
