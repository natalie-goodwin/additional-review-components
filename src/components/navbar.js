/*This NavBar component will be added to the Movie-List container; there will not be links
just the website title. */
import React from "react";

export default class Navbar extends React.Component {
    render() { 
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav justify-content-center">    
                <a className="navbar-brand"><img className="filmReel" 
                src="./images/film-reel-g158e39521_1280.png" alt="film reel"/>&nbsp; &nbsp;Classic Film Reviews</a>&nbsp;&nbsp;<img className="filmReel" 
                src="./images/film-reel-g158e39521_1280.png" alt="film reel"/>                         
            </nav>
        </div> //closing container div        
        ); //closing return parentheses
    } // closing render braces
} // closing export braces

