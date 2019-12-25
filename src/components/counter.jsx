import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  render() {
    return (
      <div class="text-center">
        <h3 class="text-center text-primary">Day {this.props.counter.id}</h3>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          DELETE
        </button>
      </div>
    );
  }

  handleIncrement = id => {
    console.log(id);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    var classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    if (this.state.value === 0) {
      return "Zero";
    }
    return this.state.value;
  }
}

export default Counter;
