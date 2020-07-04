import React from 'react'
import HomeJumbotron from '../../components/HomeJumbotron';
import ImageCap from '../../components/ImageCap';
import HomeWorkBar from '../../components/HomeWorkBar';
import SgImage from '../../SG-Homepage.png'

const Home = () => {
  return (
    <>
      <HomeJumbotron></HomeJumbotron>
      <HomeWorkBar></HomeWorkBar>
      <ImageCap
        title="Source Graphics"
        image={SgImage}
        text="I have managed the Source Graphics website for the past 2 years. I've been able to exercise my front-end web development skills through building new pages and features using HTML, CSS, JavaScript."
        link="https://sourcegraphics.com"></ImageCap>
    </>
  )
}

export default Home;
