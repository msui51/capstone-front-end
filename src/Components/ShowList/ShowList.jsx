import React from 'react';
import Show from '../Show/Show';
import { Link } from 'react-router-dom';
import './showList.scss';
import Banner from '../Banner/Banner';
import { ArrowBackIcon } from '@chakra-ui/icons';

function ShowList({shows, socket}) {

  // connect to socket

  const connectToSocket=()=>{
    socket.connect();
  }
  return (
    <>
    <Banner/>
    <div className='showList'>
      <div className='showList__link-wrapper'>
      <Link className='showList__back-link' to='/selections'>
        <div className='showList__icon'>
        <ArrowBackIcon boxSize={32} color='#884AB2'/>
        </div>
        <h1 className='showList__title'>GENRE</h1>  
      </Link>    
      </div>
      <div className='showList__wrapper'>
        <div className='showList__sub-titles-wrapper'>
          <h2 className='showList__sub-titles'>DJ</h2>
          <h2 className='showList__sub-titles'>Venue</h2>
          <h2 className='showList__sub-titles'>City</h2>
          <h2 className='showList__sub-titles'>State</h2>
          <h2 className='showList__sub-titles'>Dates</h2>
        </div>
        {shows.map((show)=>(
          <Link className='showList__show-link' onClick={connectToSocket} to={`/${show.dj}`}>
            <Show 
                key={show.shows_id}
                id={show.shows_id}
                dj={show.dj}
                venue={show.name}
                city={show.city}
                state={show.state}
                date={show.date}
            />
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default ShowList