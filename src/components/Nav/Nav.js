import React from 'react';
import listivity from "../../Listivity.png";
import littlegems from "../../LittleGems.png"
import { Link } from 'react-router-dom'
import LittleGems from '../../pages/littlegems';

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <a class="navbar-brand"><strong>Jonah</strong> Householder</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to={process.env.PUBLIC_URL + "/"}>
                <a class="nav-link">Home<span class="sr-only">(current)</span></a>
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
                  </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to={process.env.PUBLIC_URL + "/listivity"}>
                  <a class="dropdown-item d-flex align-items-center">
                    <img class="mr-3" src={listivity}></img>
                    <div className="overflow-auto">
                      <p className="font-weight-bold overflow-auto">Listivity</p>
                      <p className="text-wrap">Listivity helps you keep track of all the things you said you wanted to do.</p>
                    </div>
                  </a>
                </Link>
                <div class="dropdown-divider"></div>
                <Link to={process.env.PUBLIC_URL + "/littlegems"}>
                  <a class="dropdown-item d-flex align-items-center" >
                    <img class="mr-3" src={littlegems}></img>
                    <div className="overflow-auto">
                      <p className="font-weight-bold overflow-auto">Little Gems</p>
                      <p className="text-wrap">Little Gems helps you find great local food you may have overlooked.</p>
                    </div>
                  </a>
                </Link>
              </div>
            </li>
            <li class="nav-item">
              <Link to={process.env.PUBLIC_URL + "/about"}>
                <a class="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
