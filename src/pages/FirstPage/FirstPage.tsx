import { useState } from 'react';
import './firstpagestyle.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {

  const [userData, setUserData] = useState({ name: '', phone: '', email: '' });

  const navigate = useNavigate();

  const handlesubmit = () => {

    let storedData = localStorage.getItem('users');

    if (storedData === null) {
      localStorage.setItem('users', JSON.stringify([]));
    } else {
      const newUser = {
        name: userData.name,
        phone: userData.phone,
        email: userData.email
      }
      if (userData.name !== '' && userData.phone !== '' && userData.email !== '') {
        let usersJSON = localStorage.getItem('users');
        if (usersJSON !== null) {
          const arrayFromJson = JSON.parse(usersJSON);
          arrayFromJson.push(newUser);
          localStorage.setItem('users', JSON.stringify(arrayFromJson));
          navigate('/secondpage');
        }
      } else {
        if (userData.phone.length < 9) {
          alert('Please Enter Valid Phone Number');
        }
        alert('User Must Enter Their Details Before Accessing The page!')
      }
    }
  };


  return (
    <div className="form-container">
      <div className='form-inputs'>
        <input type="text" placeholder="Enter Name" onChange={(e) => setUserData({ ...userData, name: e.target.value })} required />
        <input type="text" placeholder="Enter Phone" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} required />
        <input type="email" placeholder="Enter Email" onChange={(e) => setUserData({ ...userData, email: e.target.value })} required />
        <Button variant="contained" onClick={() => handlesubmit()}>Submit</Button>
      </div>
    </div>

  )
};

export default FirstPage