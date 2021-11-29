import React from 'react';
import styled from 'styled-components'
import './index.css';


const Header = styled.div`
display: flex;
flex-direction: column;
align-items:center;
background: pink;
max-width:90%;
width: 80%;
margin: 0 auto;
margin-bottom: 1em;
text-align:center;

`
const Title = styled.h1`
        width: 80%;
    //    background: green;
        padding: 1em;
        border-radius: 10px;
        // text-align:center;
        font-family:font-family: 'Gluten', cursive;
        letter-spacing: 1em;


`

const ListGroup = styled.ul`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
`

const ListItems = styled.li`
    color:blue;
    display: inline-block;
    padding: 1em 2em;
    margin: 2em 1em;
    // width: 150ch;
    list-style: none;
  
`



const HeaderContent = () => {
 
        return(
            <>
            <Header>
            <Title>Bee Reacts</Title>
            <ListGroup>
                <ListItems>Hey</ListItems>
                <ListItems>There</ListItems>
                <ListItems>Now</ListItems>
            </ListGroup>
            </Header>
            </>
        );
}





export default HeaderContent