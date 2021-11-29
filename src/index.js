import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'
import HeaderContent from './HeaderContent'
import SectionContent from './SectionContent';
import './index.css';


class Main extends React.Component {
    render() {
        return(
            <> 
            <HeaderContent/>
          
            <div>
                <SectionContent/>
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
