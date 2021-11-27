import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import './index.css';


const SectionMain = styled.div`
background: pink;
width: 900px;

`
const Title = styled.h1`
        margin: 0 auto;
        margin:0 0 .5em 0;
        padding: 1em 0;
        border-radius: 10px;
        text-align:center;
        font-family:font-family: 'Gluten', cursive;

`

const ListGroup = styled.ul`
    display: flex;
    justify-content: center;
`

const ListItems = styled.li`
    color:blue;
    padding: 2em;
`
const Section = styled.div`
    background: ivory;
    margin: 4px;
    width: 800px;
    margin: 0 auto;
    //height: 150px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-family: 'Gluten', cursive;
    font-size: 40px;
    color: purple;
    border: 3px solid grey;

`


const SectionTitle = styled.div`
    color: cornflowerblue;
    margin-top: 0;
    display: flex;
    justify-content: center;
    // width: 50px;
    border-right: solid 3px pink;

`

class Main extends React.Component {
    render() {
        return(
            <>
            <SectionMain>
            <Title>Bee Reacts</Title>
            <ListGroup>
                <ListItems>Hey</ListItems>
                <ListItems>There</ListItems>
                <ListItems>Now</ListItems>
            </ListGroup>
            </SectionMain>


            <div>
                <Section>
                    <SectionTitle>
                       Nav List React!
                    </SectionTitle>
                </Section>


                <Section>
                    <SectionTitle>
                        Article React!
                    </SectionTitle>
                </Section>


                <Section>
                    <SectionTitle>
                        Aside React!
                    </SectionTitle>
                </Section>

                
                <Section>
                    <SectionTitle>
                        Footer React!
                    </SectionTitle>
                </Section>
                </div>

            </>

        );

    }

}
// const element=<h1>Welcome to React!</h1>

// ReactDOM.render(element, document.getElementById("root"))

// const mainElement=<div>Main article</div>
// ReactDOM.render(mainElement, document.getElementById("article"))

// const asideElement=<div>The grande aside</div>
// ReactDOM.render(asideElement, document.getElementById("aside"))


// const footerElement=<div>The grande foot</div>
ReactDOM.render(<Main/>, document.getElementById('root'))



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
