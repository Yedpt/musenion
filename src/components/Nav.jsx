// import React, {useState} from 'react'
// import styled from 'styled-components'
// import BurgerButton from './BurgerButton'
import { useState } from 'react'
import styled from 'styled-components'
import  styles from './Nav'


// function Nav () {

//     const [clicked,setClicked] = useState(false)
//     const handleClick = () => {
//         //cuando true, lo transforma en false y viceversa
//         setClicked(!clicked)
//     }
//     return (
//         <>
//         <NavContainer>
//             <h2>Navbar <span>Responsive</span></h2>
//             <ul className={`links ${clicked ? 'active': ''}`}>
//                 <li><a href='/'>Home</a></li>
//                 <li><a href='/'>Galeria Virtual</a></li>
//                 <li><a href='/'>Sube tu Meme</a></li>
//                 <li><a href='/'>Sobre Nosotros</a></li>
//                 <li><a href='/'>Creadores</a></li>
//                 <li><a href='/'>Contacto</a></li>
//             </ul>
//             <div className='burger'>
//                 <BurgerButton clicked={clicked} handleClick={handleClick} />
//             </div>
            
//         </NavContainer>
//         </>
//     )
// }

// export default Nav

// const NavContainer = styled.nav`
//     styled.h2{
//         color: white;
//         font-weight: 400;
//         span{
//             font-weight: bold;
//         }
//     }
//     padding: .4rem;
//     background-color: #333;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     a{
//         color: white;
//         text-text-decoration: none;
//         margin-right: 1rem;
//     }
//     .links{
//         position: absolute;
//         top: -700px;
//         left: -200px;
//         margin-left: auto;
//         margin-right: auto;
//         text-align: center;
//         a{
//             color: black;
//             font-size: 2rem;
//             display: block;
//         }
//         @media(min-width: 768px){
//             position: initial;
//             margin: 0;
//             a{
//                 font-size: 1rem;
//                 color: white;
//                 display:inline;

//             }
//         }

//     }

//     .links.acive{
//         width: 100%;
//         display: block;
//         position: absolute;
//         margin-left: auto;
//         margin-right: auto;
//         top:30%;
//         left: 0;
//         right: 0;
//         text-align: center;
//     }
//     .burger{
//         @media(min-width: 768px) {
//             display: none;
//         }
//     }
// `

const StyledNav = styled.nav `
  background: linear-gradient(to bottom, #FFDC59, #E2730C);
`;

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div className="App">
        <header className="App-header">
        <StyledNav>
          <nav className={`${styles.navbar}`}>
            {/* logo */}
            <a href='#home' className={`${styles.logo}`}>Dev. </a>
            <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Galeria Virtual</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Sobre tu Meme</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Sobre Nosotros</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Los Creadores</a>
              </li>
              <li onClick={removeActive}>
                <a href='#home' className={`${styles.navLink}`}>Contact</a>
              </li>
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`}  onClick={toggleActiveClass}>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
            </div>
          </nav>
          </StyledNav>
        </header>
      </div>
    );
  }
  export default Navbar;
  ;