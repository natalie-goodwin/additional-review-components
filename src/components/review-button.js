/*This SubmitButton component will be added to the ReviewForm component */
import React from "react";

export default class ReviewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.name,
            id: props.id
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.props.onClick(e)
        console.log(e);
    }
    render() {
        return(
            <div className="text-black bg-light card-footer col-sm-12">
                <p>What you think of the movie?</p>
                <input type="text" id="newReview"/><br /><br />
                <button className="btn btn-info" onClick={this.handleClick} name={this.state.title} id={this.state.id}>Add your review</button>
            </div>
        ) /*this is the code that creates the review button and form */
    }
}