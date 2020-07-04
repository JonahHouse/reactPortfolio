import React from 'react';
import listivity from "../../Listivity.png";
import littlegems from "../../LittleGems.png"

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Jonah Householder</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
                  </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item d-flex align-items-center" href="/listivity">
                  <img class="mr-3" src={listivity}></img>
                  <div className="overflow-auto">
                    <p className="font-weight-bold overflow-auto">Listivity</p>
                    <p className="text-wrap">Listivity helps you keep track of all the things you said you wanted to do.</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item d-flex align-items-center" href="/littlegems">
                  <img class="mr-3" src={littlegems}></img>
                  <div className="overflow-auto">
                    <p className="font-weight-bold overflow-auto">Little Gems</p>
                    <p className="text-wrap">Little Gems helps you find great local food you may have overlooked.</p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Nav
