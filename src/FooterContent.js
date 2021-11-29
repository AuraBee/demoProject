import React from 'react'
import styled from 'styled-components'
import './index.css';



const Footer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
background: pink;
max-width:90%;
width: 60%;
 margin: 0 auto;
text-align:center;

`
const Logo = styled.h3`
display: flex;
justify-content:center;
        width: auto;
        background: green;
        padding: 1em;
        border-radius: 10px;
        text-align:center;
        font-family:font-family: 'Gluten', cursive;
        letter-spacing: 1em;


`

const FooterList = styled.ul`

    display: flex;
    align-items: center;
    width: auto;

`

const FooterItems = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background:purple;
    color:blue;
    // display: inline-block;
    margin-right: .5em;
    margin-left: .5em;
`





const FooterContent = () => {
 
    return(
        <>
        <Footer>
        <Logo>Bee Reacts</Logo>
        <FooterList>
            <FooterItems></FooterItems>
            <FooterItems></FooterItems>
            <FooterItems></FooterItems>
            <FooterItems></FooterItems>
            <FooterItems></FooterItems>
            <FooterItems></FooterItems>
        </FooterList>
        </Footer>
        </>
    );
}

export default FooterContent