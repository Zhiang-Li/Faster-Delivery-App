import React, { Component } from "react";
import ErrandCard from "./ErrandCard";
import PropTypes from "prop-types";

export default class CompletedBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="border rounded p-1" style={{ backgroundColor: "palegreen"}} >
        <div className="row">
          {this.props.errands.map((inter) => (
            <ErrandCard errand={inter} key={inter.id} cardType="completed" />
          ))}
        </div>
      </div>

    );
  }
}

CompletedBoard.propTypes = {
  errands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      delivery_time: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      destination: PropTypes.string.isRequired,
      compensation: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};
