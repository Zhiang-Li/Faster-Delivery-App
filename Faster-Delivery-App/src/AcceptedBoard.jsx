import React, { Component } from "react";
import ErrandCard from "./ErrandCard";
import PropTypes from "prop-types";

export default class AcceptedBoard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {onCancelErrand, onCompleteErrand } = this.props;
    return (
      <div className="border rounded p-1" style={{ backgroundColor: "pink" }}>
        <div className="row">
          {this.props.errands.map((inter) => (
            <ErrandCard errand={inter} key={inter.id} cardType="accepted"
              onCancel={onCancelErrand}
              onComplete={onCompleteErrand}/>
          ))}
        </div>
      </div>

    );
  }
}

AcceptedBoard.propTypes = {
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
  onCancelErrand: PropTypes.func.isRequired,
  onCompleteErrand: PropTypes.func.isRequired,
};
