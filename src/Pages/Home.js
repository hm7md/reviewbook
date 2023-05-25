import React from 'react';
import Header from '../Components/Header';
import Choose from '../Components/Choose';
import Reviewbook from '../Components/Reviewbook';
import Booklist from './Components/Booklist';


function Home(){
    return(
      
<>
    <Header/>
   <Choose/>
   <Reviewbook/>
   <Booklist/>
</>
    

    )
    }
export default Home;