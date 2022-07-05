import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
import User from '../User/User'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getAllUser } from '../../api/UserRequest'
import { useEffect } from 'react'
const FollowersCard = () => {
     const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
      console.log(data)
    };
    fetchPersons();
  }, []);

  return (
    <div className="FollowersCard">
        <h3>People you may Know</h3>

         {persons.map((person, id) => {
        if (person._id !== user._id) return <User person={person} key={id} />;
      })}
    </div>
  )
}

export default FollowersCard