import React, { Component } from "react";

class TopNavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark text-light">
        <h3>Fertility Awareness Method</h3>
        <button class="btn btn-outline-success" type="button">
          Previous Cycle
        </button>
        <button class="btn btn-outline-success" type="button">
          Next Cycle
        </button>
      </nav>
    );
  }
}

export default TopNavBar;
