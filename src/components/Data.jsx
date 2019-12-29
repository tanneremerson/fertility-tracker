import React, { Component } from "react";

class Data extends Component {
  getDays() {
    return this.props.data.cycles[this.props.currentCycle - 1];
  }

  renderTable() {
    const days = this.getDays();
    return days.map(day => {
      const { id, date, temp, fluid, cervix } = day;
      return (
        <tr key={id} onClick={() => this.props.onUpdate(id, 99.4)}>
          <th scope="row">{id}</th>
          <td>{date}</td>
          <td>{temp}</td>
          <td>{fluid}</td>
          <td>{cervix}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Cycle Day</th>
            <th scope="col">Date</th>
            <th scope="col">Temperature</th>
            <th scope="col">Fluid</th>
            <th scope="col">Cervix Opening</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}

export default Data;
