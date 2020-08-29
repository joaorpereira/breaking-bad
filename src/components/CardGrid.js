import React from 'react'
import CardItem from './CardItem'
import styled from 'styled-components'

const Container = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items:center;
    align-items:center;
    gap: 2rem;

    @media only screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default function CardGrid({characters, authorText}) {
    console.log(authorText)
    return (
        <Container>
            {characters
            
            .filter(character =>{
                return character.name.toLowerCase().indexOf(authorText) >= 0
            })
            
            .map(character => (
                <CardItem
                    key={character.char_id}
                    character={character}  
                    filterText = {authorText}       
                />      
            ))}
        </Container>
    )
}

