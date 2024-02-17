import { Link } from 'react-router-dom';
import Logo from './Logo.png';
import { useState } from 'react';

const NavBar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const flexBetween = 'flex items-center justify-between';
  const navbarBackground = 'bg-purple-400 drop-shadow';

  const fontStyles = {
    fontFamily: 'Monospace, sans-serif',
    fontWeight: 'normal',
  };

  const buttonStyles = {
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const handleButtonHover = (buttonName) => {
    setHoveredButton(buttonName);
  };

  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`} style={fontStyles}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween}  gap-16 items-center`}>
            <img alt='logo' src={Logo}/>

            <Link
              to='/'
              style={{
                ...buttonStyles,
                backgroundColor: hoveredButton === 'home' ? 'purple-500' : 'transparent',
                color: hoveredButton === 'home' ? 'white' : 'black',
              }}
              onMouseEnter={() => handleButtonHover('home')}
              onMouseLeave={handleButtonLeave}
            >
              Home
            </Link>

            <Link
              to='/about'
              style={{
                ...buttonStyles,
                backgroundColor: hoveredButton === 'about' ? 'purple-500' : 'transparent',
                color: hoveredButton === 'about' ? 'white' : 'black',
              }}
              onMouseEnter={() => handleButtonHover('about')}
              onMouseLeave={handleButtonLeave}
            >
              About
            </Link>

            <Link
              to='/antrenamente'
              style={{
                ...buttonStyles,
                backgroundColor: hoveredButton === 'antrenamente' ? 'purple-500' : 'transparent',
                color: hoveredButton === 'antrenamente' ? 'white' : 'black',
              }}
              onMouseEnter={() => handleButtonHover('antrenamente')}
              onMouseLeave={handleButtonLeave}
            >
              Antrenamente
            </Link>
          </div>
          <div className={`${flexBetween} gap-16 ml-auto`}>
            <div className={`${flexBetween} gap-16 ml-auto rounded-md bg-purple-600 hover:bg-purple-800 hover:text-white`}>
              <Link
                to='/login'
                style={{
                  ...buttonStyles,
                  backgroundColor: hoveredButton === 'login' ? 'purple-800' : 'transparent',
                  color: hoveredButton === 'login' ? 'white' : 'black',
                }}
              onMouseEnter={() => handleButtonHover('login')}
              onMouseLeave={handleButtonLeave}
              >
                Login
              </Link>
            </div>
            <div className={`${flexBetween} gap-16 ml-auto rounded-md bg-purple-600 hover:bg-purple-800 hover:text-white`}>
              <Link
                to='/register'
                style={{
                  ...buttonStyles,
                  backgroundColor: hoveredButton === 'register' ? 'purple-800' : 'transparent',
                  color: hoveredButton === 'register' ? 'white' : 'black',
                }}
              onMouseEnter={() => handleButtonHover('register')}
              onMouseLeave={handleButtonLeave}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
