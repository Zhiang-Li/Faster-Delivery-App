import React, { Component } from "react";
import ErrandCard from "./ErrandCard";
import PropTypes from "prop-types";

export default class ErrandBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onAcceptErrand } = this.props;
    return (
      <div className="border rounded p-1" style={{ backgroundColor: "red" }}>
        <div className="row">
          {this.props.errands.map((inter) => (
            <ErrandCard errand={inter} key={inter.id} cardType="posted" onAccept={onAcceptErrand}/>
          ))}
        </div>
      </div>

    );
  }
}

ErrandBoard.propTypes = {
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
  onAcceptErrand: PropTypes.func,
};
