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
    axios.get('https://capstone-back-end-8abd12be2c11.herokuapp.com/selections')
    .then((response)=>{
      setGenres(response.data);
    });
  },[]);

// grabbing data for list of shows

  useEffect(()=>{
    axios.get(`https://capstone-back-end-8abd12be2c11.herokuapp.com/selections/${id}`)
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