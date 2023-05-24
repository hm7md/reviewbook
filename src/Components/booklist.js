import FMovie from "./images/twilight.jpg"
import SMovie from "./images/hunger.jpg"
import TMovie from "./images/thealchemist.jpg"
import hMovie from "./images/harry.jpg"
import { Link } from "react-router-dom";

function booklist(){
    return(
        <div id='bookList'>
            <div className="child" id="child1">
            <div>
              <img  src={SMovie} alt=""/>
              </div>
              <div>
              <h3 class="Title">The Hunger Games</h3>
              <p>In a future North America, where the rulers of Panem maintain control through an annual televised survival competition pitting young people from each of the twelve districts against one another, sixteen-year-old Katniss's skills are put to the test when she voluntarily takes her younger sister's place..</p>
              <Link to ='/.review'><button>review</button></Link>
              </div>
          </div>
          <div  className="child" id="child2">
            <div>
              <img  src={hMovie} alt=""/>
              </div>
              <div>
              <h3 class="Title">Harry Potter and the Philosopher's Stone</h3>
              <p>John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes</p>
              <button>review</button>
              </div>
          </div>
          <div  className="child" id="child3">
            <div>
              <img  src={FMovie} alt=""/>
              </div>
              <div>
              <h3 class="Title">Twilight</h3>
              <p>A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess..</p>
              <button>review</button>
              </div>
          </div>
          <div  className="child" id="child4">
            <div>
            <img  src={TMovie} alt=""/>
            </div>
            <div>
             <h3 class="Title">the alchimist</h3>
            <p>In Marvel Studios’ “Guardians of the Galaxy Vol. 3” our beloved band of misfits are settling into life on Knowhere. But it isn’t long before their lives are upended by the echoes of Rocket’s turbulent past. Peter Quill, still reeling from the loss of Gamora, must rally his team around him on a dangerous mission to save Rocket’s life—a mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.</p>
            <button>review</button>
            </div>
        </div>
        
    </div>
    )
}
export default booklist;