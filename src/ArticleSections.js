
import React from 'react';
import styled from 'styled-components'
import './index.css';



const Section = styled.div`
    background: ivory;
    margin: 4px;
    // width: 45%;
    // margin: 0 auto;
    margin: 0 1em 2em 1em;
    height: 150px;
    border-radius: 10px;
    display: inline-flex;
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
    // justify-content: center;
    // // width: 50px;
    border-right: solid 3px pink;
`



const ArticleSections = () => {
    return(
          <>
           <div>
                <Section>
                    <SectionTitle>
                         Featured React!
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
                        Sub React!
                      </SectionTitle>
                  </Section>
            </div>
      </>
    )
}



export default ArticleSections