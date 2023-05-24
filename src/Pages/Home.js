import React from 'react';
import Choose from '../Components/Choose';


function Home(){
    return(
        <div>
          <header className="hero-section">
    </header>
   <Choose/>

     <section className="blog-section">
        <h1>book types</h1>
       {/* <div className="article-container">
        <Cards paragraph="science fiction" title="the alchemist" details="Science fiction (sometimes shortened to sf or sci-fi) is a genre of speculative fiction, which typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life."/>
        <Cards paragraph="romance" title="if i ever met you" details="If faking love is this easy… how do you know when it’s real?
The brand new novel from Sunday Times bestselling author Mhairi McFarlane" />
        <Cards paragraph="A Motivational Journal" title="Do It For Yourself" details="A Bold Motivational Journal For Anyone Seeking To Boost Their Productivity   Whether You’Re Embarking On A New Project Or Planning Your Future, Understanding What Makes You Tick Is The Crucial ﬁrst Step In Making Things Happen." />
        <Cards paragraph="traveling" title="Tuscany Marvel" details="The Italian region of Tuscany is a feast for all senses. A creative incubator that has cultivated art and architecture for eras including Etruscan, Roman, Renaissance and modern times."/>
        
        
        </div> */}
       <form action="" class="search-form">
<input type="search" name="" placeholder="search here" id="search-box"/>
  <button type="submit" id="search-btn">search</button>


       </form>
       </section>
        </div>
    )
}
export default Home;