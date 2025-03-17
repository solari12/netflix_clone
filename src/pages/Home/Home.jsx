import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../../public/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitlesCards from '../../components/TitlesCards/TitlesCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem veniam sequi ipsa minus repellat, animi in neque accusamus amet sed.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitlesCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitlesCards title={"Popular"} category={"popular"}/>
        <TitlesCards title={"Only on NetFlix"} category={"top_rated"}/>
        <TitlesCards title={"Horror with your honey"} category={"upcoming"}/>
        <TitlesCards title={"Up coming"} category={"top_rated"}/>
      </div>
        <Footer/>
    </div>
  )
}

export default Home

