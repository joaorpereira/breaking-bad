import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'

const Container = styled.div`
    display: flex;
    height: 5em;
    padding: 0 25px;
    background: #222831;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0px 2px 5px rgba(50, 50, 50, 0.77);

    img{
        height: 3.3em;
    }
`

const NavMenu = styled.ul`
    display: flex;
    justify-content:center;
    align-items:center;
    list-style-type: none;

    li a {
       text-decoration:none;
       color: white;
       margin: 0 15px;
       text-transform: uppercase;
       transition: 0.3s;
       :hover{
           color: #04D361;
       }            
    }

`


export default function NavBar() {
    return (
        <Container>            
            <img src={logo} alt="Breaking Bad"/>
            <NavMenu>
                <li>
                    <a href="/">Home</a> 
                </li>
                <li>
                    <a href="/">Caracthers</a> 
                </li>
            </NavMenu>            
        </Container>
    )
}
