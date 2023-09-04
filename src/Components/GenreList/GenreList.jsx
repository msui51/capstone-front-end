import React from 'react';
import './genreList.scss';
import Genre from '../Genre/Genre';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

function GenreList({genres}) {
  return (
    <>
        <Banner/>
        <div className='genreList'>
            <div className='genreList__wrapper'>
              {genres.map((genre) =>(
                <div className='genreList__item'>
                <Link to={`/selections/${genre.music_genre_id}`}>
                <Genre
                  key={genre.music_genre_id}
                  id={genre.music_genre_id}
                  name={genre.music_genre}
                  image={genre.image}
                />
                </Link>
                </div>
              ))}
            </div>

            <div className='genreList__images'>
              <img className='genreList__image'src='http://localhost:5000/images/tech-house.jpeg' alt='rave venue'></img>
              <img className='genreList__image'src='http://localhost:5000/images/techno.jpeg' alt='techno scene'></img>
              <img className='genreList__image'src='http://localhost:5000/images/drum-and-bass.jpeg' alt='techno scene'></img>
              <img className='genreList__image'src='http://localhost:5000/images/melodic-house.jpeg' alt='techno scene'></img>
            </div>
          </div>
    </>
  )
}

export default GenreList