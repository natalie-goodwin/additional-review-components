/*This is the container component that opens the entire application */
import React from "react";
import Navbar from "./navbar";
import Movie from "./movie";

export default class MovieList extends React.Component {
    render() {
        let movies = [ /*this is the array of movies */
            {
                title: "Double Indemnity",
                image: "./images/Double_Indemnity.jpg",
                plot: "Suspense, Crime, Noir",
                reviews: []
            }, 
            {
                title: "Singin' in the Rain",
                image: "./images/Singin'_in_the_Rain_.jpg",
                plot: "Musical",
                reviews: []
            },
            {
                title: "Ninotchka",
                image:  "./images/Ninotchka.jpg",
                plot: "Romantic comedy",
                reviews: []
            },
            {
                title: "Sunrise",
                image: "./images/Sunrise.jpg",
                plot: "Silent film",
                reviews: [] /*holds film review array */
            }
        ]

        let arr;
        arr = movies.map( (movies, index ) => 
            <Movie title={movies.title} plot={movies.plot} reviews={movies.reviews} image={movies.image} key={index} />
        ) /*the array includes subarrays for each piece of the film */

        return (
            
            <div className="container">
                <div className=""container>
                    <Navbar />
                </div> <br /><br />
                
                <div className="container">
                    {arr}
                </div>
            </div>
            

        )
    } //closing render braces
} /*closing export bracket */


