
import React from 'react';
import HeaderContent from './HeaderContent';
import ArticleSections from './ArticleSections';
import FooterContent from './FooterContent';


const Content = () => {
  return(
    <>
        <div>
           <HeaderContent/>
           <ArticleSections/>
           <FooterContent text="Hullo"/>
        </div>
     </>
    );
}
   
export default Content

