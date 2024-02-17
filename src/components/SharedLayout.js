import {  Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from './Footer';
const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section'>
        <Outlet />
      </section>
      <Footer/>
    </>
  );
};
export default SharedLayout;