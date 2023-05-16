import React from 'react';
import Cards from "../Components/Cards";
import Choose from '../Components/Choose';


function Home(){
    return(
        <div>
          <header className="hero-section">
    </header>
   <Choose/>

     <section className="blog-section">
        <h1>book types</h1>
       <div className="article-container">
        <Cards paragraph="science fiction" header="Recieve money in any currency with no fees"/>
        <Cards paragraph="romance"/>
        <Cards paragraph="story telling"/>
        <Cards paragraph="traveling"/>
        </div>
       
       </section>
        </div>
    )
}
export default Home;