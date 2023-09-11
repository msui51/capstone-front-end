import React from 'react'
import { useParams } from 'react-router-dom';
import './selectionsPage.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ShowList from '../../Components/ShowList/ShowList';
import GenreList from '../../Components/GenreList/GenreList';
import Header from '../../Components/Header/Header';

function SelectionsPage({socket}) {
  const [genres, setGenres] = useState([]);
  const [shows, setShows] = useState([]);
  const {id} = useParams();


//grabbing data for list of genres

  useEffect(()=>{
    axios.get('http://localhost:5000/selections')
    .then((response)=>{
      setGenres(response.data);
    });
  },[]);

// grabbing data for list of shows

  useEffect(()=>{
    axios.get(`http://localhost:5000/selections/${id}`)
    .then((response)=>{
      setShows(response.data)
    });
  }, [id]);


  return (
    <>
      <Header/>
      <div className='selections'>       
        {id ? <ShowList shows={shows} socket={socket}/> :
            <GenreList genres={genres}/>
        }  
      </div>
    </>
  )
}

export default SelectionsPage