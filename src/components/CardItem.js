import React from 'react'
import styled from 'styled-components'
import './style.css'

const Image = styled.img`
    width: 100%;
    height: 280px;
    padding: 0px;
    margin:0;
    border-bottom-right-radius:0.5rem;
    border-bottom-left-radius:0.5rem;
`;

const Text = styled.p`
    padding: 3px;
    transition: 0.3s;
    :hover{
    color: #04D361;}
`;

const Front = styled.div`
    padding:5px;
    background: #313131;
    color:white;
    border-top-right-radius:0.5rem;
    border-top-left-radius:0.5rem;
`;

const Back = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
    width: 250px;
    height: 345px;
    background: #313131;
    border-radius:0.5rem;
`;

const BackText = styled.p`
    margin: 10px;
    color: #04D361;
    transition: 0.3s;
    text-transform: capitalize;

    :hover{
    color: white;}

    strong{
        color:white;
    }
`;

export default function CardItem({character}) {
    return (
        <div className="flip-container">
            <div className="flipper">
                <div className="front">
                    <Front>
                        <Text><strong>{character.name}</strong></Text>
                        <Text>"{character.nickname}"</Text>
                    </Front>
                    <Image src={character.char_id === 2 ? character.img = "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441" : character.img} alt=""/>           
                </div>
                <div className="back">
                    <Back>
                        <BackText><strong>{character.name}</strong></BackText>
                        <BackText><strong>birthday: </strong>{character.birthday}</BackText>
                        <BackText><strong>occupation: </strong>{character.occupation}</BackText>
                        <BackText><strong>status: </strong>{character.status}</BackText>
                        <BackText><strong>Actor: </strong>{character.portrayed}</BackText>                  
                    </Back>    
                </div>
            </div>
        </div>
    )
}
