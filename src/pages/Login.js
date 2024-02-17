import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return;
    // setUser({ username: username, password: password }); // dacă dorești să setezi utilizatorul în funcție de login, nu uita să adaugi setUser
    navigate('/');
  };

  return (
    <section className='grid h-screen w-full bg-login flex items-center justify-center'>
      <form className='max-w-[400px] w-full mx-auto bg-white p-4 form' onSubmit={handleSubmit}>
        <h2 className='text-4xl font-bold text-center py-6'>Sportify</h2>
        <div className='flex flex-col py-2'>
          <label htmlFor='username'>Username</label>
          <input
            className='border p-2'
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-col py-2'>
          <label htmlFor='password'>Password</label>
          <input
            className='border p-2'
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='border w-full my-5 py-2 bg-purple-500 hover:bg-purple-300 text-black' type='submit'>
          Sign In
        </button>
        <div className='flex justify-between'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' /> <span className='checkbox-label'>Remember Me</span>
            </p>
            <Link to='/register' className='text-sm font-bold mt-1 ml-4 text-purple-500 hover:text-red-300'>
              Create an account
            </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;

