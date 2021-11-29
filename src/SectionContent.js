
import React from 'react';
import styled from 'styled-components'


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



const SectionContent = () => {
 
    return(
        <>
 
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
   
    export default SectionContent

