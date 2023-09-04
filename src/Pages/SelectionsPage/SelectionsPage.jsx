import React from 'react'
import HeaderContact from '../../Components/Header/HeaderContact';
import { Link, useLocation, useParams } from 'react-router-dom';
import './selectionsPage.scss';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ShowList from '../../Components/ShowList/ShowList';
import GenreList from '../../Components/GenreList/GenreList';

function SelectionsPage() {
  // const location = useLocation();
  // const username = location.state;
  const [genres, setGenres] = useState([]);
  const [shows, setShows] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    axios.get('http://localhost:5000/selections')
    .then((response)=>{
      setGenres(response.data);
    });
  },[]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/selections/${id}`)
    .then((response)=>{
      setShows(response.data)
    });
  }, [id]);


  return (
    <>
      <HeaderContact/>
      <div className='selections'>       
        {id ? <ShowList shows={shows}/> :
            <GenreList genres={genres}/>
        }  
      </div>
    </>
  )
}

export default SelectionsPage