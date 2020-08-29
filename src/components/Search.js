import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;

    input{
        border:none;
        background-color: #ffffff;
        outline: none;
        padding:15px;
        width: 60%;
        margin-top: 2em;
        border-radius: 0.8em;
        font-size:15px;
        border: 1px solid #E6E6F0;
    }

    @media only screen and (max-width: 700px){
        input{
            width: 80%;  
        }
    }

`;

export default function Search(props) {
    return (
        <Container>
            <input type="text" placeholder="Type your character..." onChange={props.authorText}/>      
        </Container>
    )
}
