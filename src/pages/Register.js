// register.js

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import './Register.css'; 

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/api-user/usersAdd', {
        username: username,
        password: password,
        email: email,
        phoneNumber: phone,
      });
  
      // Manipulează răspunsul după nevoie
      console.log(response.data);
  
      // Exemplu: Redirecționează utilizatorul după înregistrare
      Navigate('/login');
    } catch (error) {
      console.error('Eroare la conectarea la API:', error);
  
      // Exemplu: Afisează un mesaj de eroare
      // setError('Înregistrare eșuată. Verificați datele introduse.');
    }
  };

  return (
    <div className='grid h-screen w-full'>
      <div className='bg--register flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center py-6'>Sportify</h2>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input
              className='border p-2'
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input
              className='border p-2'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex flex-col py-2'>
            <label>Email</label>
            <input
              className='border p-2'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col py-2'>
            <label>Phone</label>
            <input
              className='border p-2'
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button
            className='border w-full my-5 py-2 bg-purple-500 hover:bg-purple-300 text-black'
            type='button'
            onClick={handleRegister}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
