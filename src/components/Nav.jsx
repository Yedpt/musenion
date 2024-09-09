import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <>
        <NavContainer>
            <h2>Navbar <span>Responsive</span></h2>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>Galeria Virtual</a></li>
                <li><a href='/'>Sube tu Meme</a></li>
                <li><a href='/'>Sobre Nosotros</a></li>
                <li><a href='/'>Creadores</a></li>
                <li><a href='/'>Contacto</a></li>
            </ul>
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
`
