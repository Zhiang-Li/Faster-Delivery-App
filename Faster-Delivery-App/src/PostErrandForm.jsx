import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PostErrandForm extends Component {
  constructor(props) {
    super(props);
  }    

  onCreate = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    event.target.querySelector("input[name=title]").value = "";
    event.target.querySelector("input[name=description]").value = "";
    event.target.querySelector("input[name=tag]").value = "";
    event.target.querySelector("input[name=delivery_time]").value = "";
    event.target.querySelector("input[name=origin]").value = "";
    event.target.querySelector("input[name=destination]").value = "";
    event.target.querySelector("input[name=compensation]").value = "";
    event.target.querySelector("input[name=image]").value = "";
    
    this.props.onCreateInteraction(Object.fromEntries(formData));
  };
  render() {
    return (
      <div className="border rounded p-1" style={{ backgroundColor: "aqua" }}>
        <form action="/" onSubmit={this.onCreate}>
          <div className="mb-1">
            <label className="form-label">
              Title
              <input
                type="text"
                className="form-control"
                name="title"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Description
              <input
                type="text"
                className="form-control"
                name="description"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Tag
              <input
                type="text"
                className="form-control"
                name="tag"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Delivery time
              <input
                type="datetime-local"
                className="form-control"
                name="delivery_time"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Origin
              <input
                type="text"
                className="form-control"
                name="origin"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Destination
              <input
                type="text"
                className="form-control"
                name="destination"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Compensation
              <input
                type="float"
                className="form-control"
                name="compensation"
                min="0"
                defaultValue="0"
                required
              />
            </label>
          </div>

          <div className="mb-1">
            <label className="form-label">
              Image
              <input
                type="text"
                className="form-control"
                name="image"
                defaultValue="NA"
                required
              />
            </label>
          </div>

          <div>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

PostErrandForm.propTypes = {
  onCreateInteraction: PropTypes.func.isRequired,
};
