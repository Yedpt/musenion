import React, {useState} from 'react'
import styled from 'styled-components'
import BurgerButton from './BurgerButton'

function Nav () {

    const [clicked,setClicked] = useState(false)
    const handleClick = () => {
        //cuando true, lo transforma en false y viceversa
        setClicked(!clicked)
    }
    return (
        <>
        <NavContainer>
            <h2>Navbar <span>Responsive</span></h2>
            <ul className={`links ${clicked ? 'active': ''}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Galeria Virtual</a></li>
                <li><a href='/'>Sube tu Meme</a></li>
                <li><a href='/'>Sobre Nosotros</a></li>
                <li><a href='/'>Creadores</a></li>
                <li><a href='/'>Contacto</a></li>
            </ul>
            <div className='burger'>
                <BurgerButton clicked={clicked} handleClick={handleClick} />
            </div>
            
        </NavContainer>
        </>
    )
}

export default Nav

const NavContainer = styled.nav`
    styled.h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-text-decoration: none;
        margin-right: 1rem;
    }
    .links{
        position: absolute;
        top: -700px;
        left: -200px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        a{
            color: black;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display:inline;

            }
        }

    }

    .links.acive{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top:30%;
        left: 0;
        right: 0;
        text-align: center;
    }
    .burger{
        @media(min-width: 768px) {
            display: none;
        }
    }
`
