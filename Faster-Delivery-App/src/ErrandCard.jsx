import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ErrandCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: "",
      comment: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={this.state.rating}
            min="0"
            max="5"
            onChange={this.handleChange}
            style={{ height: "20px", width: "50" }}
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            style={{ height: "40px", width: "100px" }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderSubmitted() {
    return (
      <div>
        <p>Rating: <strong style={{color:"red"}}>{this.state.rating}</strong></p>
        <p>Comment: <strong>{this.state.comment}</strong></p>
      </div>
    );
  }



  render() {
    const { errand, cardType, onAccept, onCancel, onComplete } = this.props;
    return (
      <>
        <div className="col-lg-4 col-sm-6 col-12">
          <div className="card" style={{ backgroundColor: "grey" }}>
            <div className="card-body" >
              <h3 className="card-title">{this.props.errand.title} {this.props.errand.id}</h3>
              <div className="card-text">
                <div>
                  <label>
                    Description: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px", background: "#f9f9f9", borderRadius: "10px"}}><strong>{this.props.errand.description}</strong></output>
                  </label>
                </div>
                <div>
                  <label>
                    Tag: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px", background: "#f9f9f9", borderRadius: "10px" }}><strong>{this.props.errand.tag}</strong></output>
                  </label>
                </div>
                <div>
                  <label>
                    Time: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px", background: "#f9f9f9", borderRadius: "10px" }}><strong>{this.props.errand.delivery_time}</strong></output>
                  </label>
                </div>
                <div>
                  <label>
                    Origin: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px", background: "#f9f9f9", borderRadius: "10px" }}><strong>{this.props.errand.origin}</strong></output>
                  </label>
                </div>
                <div>
                  <label>
                    Destination: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px", background: "#f9f9f9", borderRadius: "10px" }}><strong>{this.props.errand.destination}</strong></output>
                  </label>
                </div>
                <div>
                  <label>
                    Compensation: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px", background: "#f9f9f9", borderRadius: "10px" }}><strong>{this.props.errand.compensation}</strong></output>
                  </label>
                </div>
                <div>
                  <label>
                    Image: <br></br>
                    <output style={{ display: "inline-block",border: "1px solid #ccc", borderColor:"black",padding: "8px" , background: "#f9f9f9", borderRadius: "10px"}}><strong>{this.props.errand.image}</strong></output>
                  </label>
                </div>
                <br></br>
                <div>
                  {cardType === "posted" && (
                    <button onClick={() => onAccept(errand.tag)}>Accept</button>
                  )}
                  {cardType === "accepted" && (
                    <>
                      <button onClick={() => onCancel(errand.tag)} style={{ display: "block", marginBottom: "10px", width: "120px", height: "40px", backgroundColor:"red"}}>Cancel</button>
                      <button onClick={() => onComplete(errand.tag)} style={{width: "120px", height: "40px"}}>Complete</button>
                    </>
                  )}
                  {cardType === "completed" && (
                    !this.state.submitted ? this.renderForm() : this.renderSubmitted()
                  )}
                  {cardType === "history" && (
                    this.renderSubmitted()
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

ErrandCard.propTypes = {
  errand: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    delivery_time: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    compensation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
  cardType: PropTypes.oneOf(["posted", "accepted", "completed"]).isRequired,
  onAccept: PropTypes.func,
  onCancel: PropTypes.func,
  onComplete: PropTypes.func,
  updateErrand: PropTypes.func,
};
