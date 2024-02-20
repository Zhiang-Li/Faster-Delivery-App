import React, { Component } from "react";
import PostErrandForm from "./PostErrandForm";
import ErrandBoard from "./ErrandBoard";
import ErrandManager from "./ErrandManager";
import AcceptedBoard from "./AcceptedBoard";
import CompletedBoard from "./CompletedBoard";
class UserPage extends Component {
  constructor(props) {
    super(props);
    
    this.pm = new ErrandManager();
    this.state = {
      errands: [],
      accepted_errands: [],
      completed_errands: [],
    };
  }
    
  saveErrandsToLocalStorage() {
    const { errands, accepted_errands, completed_errands } = this.state;
    localStorage.setItem("errands", JSON.stringify({ errands, accepted_errands, completed_errands }));
  }

  setState(state, callback) {
    super.setState(state, () => {
      this.saveErrandsToLocalStorage();
      if (callback) callback();
    });
  }

  componentDidMount() {
    // Load from Local Storage
    const storedErrands = JSON.parse(localStorage.getItem("errands"));
    if (storedErrands) {
      this.setState({ ...storedErrands });
    }

    // Listen for storage changes
    window.addEventListener("storage", this.handleStorageChange);
  }

  componentWillUnmount() {
    window.removeEventListener("storage", this.handleStorageChange);
  }

  handleStorageChange = (event) => {
    if (event.key === "errands") {
      this.setState({ ...JSON.parse(event.newValue) });
    }
  };

  onCreateInteraction = (errand) => {
    this.setState({
      errands: [...this.state.errands, errand],
    });
  };

  onAcceptErrand = (tag) => {
    const acceptedErrand = this.state.errands.find(errand => errand.tag === tag);
    this.setState(prevState => ({
      errands: prevState.errands.filter(errand => errand.tag !== tag),
      accepted_errands: [...prevState.accepted_errands, acceptedErrand],
    }));
  };

  onCancelErrand = (tag) => {
    const cancelledErrand = this.state.accepted_errands.find(errand => errand.tag === tag);
    this.setState(prevState => ({
      errands: [...prevState.errands, cancelledErrand],
      accepted_errands: prevState.accepted_errands.filter(errand => errand.tag !== tag),
    }));
  };
  
  onCompleteErrand = (tag) => {
    const errandToComplete = this.state.accepted_errands.find(errand => errand.tag === tag);
    this.setState(prevState => ({
      accepted_errands: prevState.accepted_errands.filter(errand => errand.tag !== tag),
      completed_errands: [...prevState.completed_errands, errandToComplete],
    }));
  };

  

  render() {
    return (
      <div className="container mt-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div  className="col-md-5 mx-auto mb-4">
          <h2 style={{ color: "red" }}>Post a Delivery Errand</h2>
          <PostErrandForm onCreateInteraction={this.onCreateInteraction} />
        </div>
        <div className="col-md-5 mx-auto mb-4" >
          <h2 style={{ color: "gold" }}>Errand Board</h2>
          <ErrandBoard errands={this.state.errands} onAcceptErrand={this.onAcceptErrand} />
        </div>
        <div className="col-md-5 mx-auto mb-4">
          <h2 style={{ color: "orange" }}>Accepted Errand</h2>
          <AcceptedBoard errands={this.state.accepted_errands} onCancelErrand={this.onCancelErrand} onCompleteErrand={this.onCompleteErrand} />
        </div>
        <div className="col-md-5 mx-auto mb-4">
          <h2 style={{ color: "purple" }}>Completed Errand</h2>
          <CompletedBoard errands={this.state.completed_errands} />
        </div>
      </div>
    );
  }
  
}

export default UserPage;
