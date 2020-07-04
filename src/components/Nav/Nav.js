import React from 'react';
import listivity from "../../Listivity.png";
import littlegems from "../../LittleGems.png"

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href={process.env.PUBLIC_URL + "/"}><strong>Jonah</strong> Householder</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href={process.env.PUBLIC_URL + "/"}>Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Projects
                  </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item d-flex align-items-center" href={process.env.PUBLIC_URL + "/listivity"}>
                  <img class="mr-3" src={listivity}></img>
                  <div className="overflow-auto">
                    <p className="font-weight-bold overflow-auto">Listivity</p>
                    <p className="text-wrap">Listivity helps you keep track of all the things you said you wanted to do.</p>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item d-flex align-items-center" href={process.env.PUBLIC_URL + "/littlegems"}>
                  <img class="mr-3" src={littlegems}></img>
                  <div className="overflow-auto">
                    <p className="font-weight-bold overflow-auto">Little Gems</p>
                    <p className="text-wrap">Little Gems helps you find great local food you may have overlooked.</p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={process.env.PUBLIC_URL + "/about"}>About</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
