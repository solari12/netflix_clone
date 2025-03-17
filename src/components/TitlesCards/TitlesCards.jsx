import React, { useEffect, useRef, useState } from 'react'
import'./TitlesCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitlesCards = ({title, category}) => {

  const [apiData,setApiData] = useState([]);

  const cardsRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
  }
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzIwZmFlZTEwY2ZkYzYzMWFhMzlmMmYxOWZhMGQ4OCIsIm5iZiI6MTc0MjIxODEzNC44MDgsInN1YiI6IjY3ZDgyMzk2MzE1MzhkZTYwOGYxZTdkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yMkzHMD3P6ZhTgijR-YsPNynrFLYMnmX3acX0c84Kr4'
    }
  };
  
  useEffect(() =>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='titlescards'>
      <h2>{title?title:'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitlesCards
