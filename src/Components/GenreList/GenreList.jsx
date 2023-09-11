import React from 'react';
import './genreList.scss';
import Genre from '../Genre/Genre';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

function GenreList({genres}) {

  //list of the music genre and the banner

  return (
    <>
        <Banner/>
        <div className='genreList'>
            <ul className='genreList__wrapper'>
              {genres.map((genre) =>(
                <li className='genreList__item'>
                <Link className='genreList__link' to={`/selections/${genre.music_genre_id}`}>
                <Genre
                  key={genre.music_genre_id}
                  id={genre.music_genre_id}
                  name={genre.music_genre}
                  image={genre.image}
                />
                </Link>
                </li>
              ))}
            </ul>

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