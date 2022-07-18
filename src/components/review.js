import React from "react";

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.reviews
        }
    }

    render() {
        let reviewsArray;
        if (this.state.reviews) {
            reviewsArray = this.state.reviews.map( (review, index) => 
            <li className="list-group-item" key={index}>{review}</li>
            )
        }
        return (
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Reviews</strong>
              </li>
              {reviewsArray}
            </ul>
          </div>
        ); 
    }
}
            

/*This Review component is where the review and reviewer stars will be appear after users submit their reviews. Everything 
will appear inside the card-body div.*/