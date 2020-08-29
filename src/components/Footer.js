import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 5em;
    padding: 0 25px;
    background: #222831;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 2px 5px rgba(50, 50, 50, 0.77);
    color:white;`

export default function NavBar() {
    return (
        <Container>            
            <p>Created by Joao Paulo Pereira</p>
        </Container>
    )
}
