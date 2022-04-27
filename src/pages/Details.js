import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { BlogContext } from '../contexts/BlogContext';

const Details = () => {

    const location = useLocation();
    const item = location.state.item;
    
  
  return (
    <div>Details</div>
  )
}

export default Details