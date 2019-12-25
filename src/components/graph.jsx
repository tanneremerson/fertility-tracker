import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const fake_data = {
  cycles: [
    [
      {
        date: "20191016",
        temp: 97.4,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        date: "20191017",
        temp: 97.4,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        date: "20191018",
        temp: 97.5,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        date: "20191019",
        temp: 97.5,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        date: "20191020",
        temp: 97.6,
        fluid: "BLOOD",
        cervix: "CLOSED"
      },
      {
        date: "20191021",
        temp: 97.6,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191022",
        temp: 97.5,
        fluid: "NONE",
        cervix: "CLOPEN"
      },
      {
        date: "20191023",
        temp: 97.5,
        fluid: "STICKY",
        cervix: "CLOPEN"
      },
      {
        date: "20191024",
        temp: 97.6,
        fluid: "CREAMY",
        cervix: "CLOPEN"
      },
      {
        date: "20191025",
        temp: 97.3,
        fluid: "CREAMY",
        cervix: "OPEN"
      },
      {
        date: "20191026",
        temp: 97.4,
        fluid: "EGG_WHITE",
        cervix: "OPEN"
      },
      {
        date: "20191027",
        temp: 97.5,
        fluid: "EGG_WHITE",
        cervix: "OPEN"
      },
      {
        date: "20191028",
        temp: 98.1,
        fluid: "STICKY",
        cervix: "CLOSED"
      },
      {
        date: "20191029",
        temp: 98,
        fluid: "STICKY",
        cervix: "CLOSED"
      },
      {
        date: "20191030",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191031",
        temp: 98.1,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191101",
        temp: 98.5,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191102",
        temp: 98.3,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191103",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191104",
        temp: 98.3,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191105",
        temp: 98.5,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191106",
        temp: 99,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191027",
        temp: 97.5,
        fluid: "EGG_WHITE",
        cervix: "OPEN"
      },
      {
        date: "20191028",
        temp: 98.1,
        fluid: "STICKY",
        cervix: "CLOSED"
      },
      {
        date: "20191029",
        temp: 98,
        fluid: "STICKY",
        cervix: "CLOSED"
      },
      {
        date: "20191030",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191031",
        temp: 98.1,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191101",
        temp: 98.5,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191102",
        temp: 98.3,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191103",
        temp: 98,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191104",
        temp: 98.3,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191105",
        temp: 98.5,
        fluid: "NONE",
        cervix: "CLOSED"
      },
      {
        date: "20191106",
        temp: 99,
        fluid: "NONE",
        cervix: "CLOSED"
      }
    ]
  ]
};

class Graph extends Component {
  constructor(props) {
    super(props);
    this.dates = fake_data.cycles[0].map((cycle, index) => index + 1);
    this.temps = fake_data.cycles[0].map(cycle => cycle.temp);
    this.state = {
      chartData: {
        labels: this.dates,
        datasets: [
          {
            borderColor: "rgba(23, 162, 184, 1)",
            fill: false,
            data: this.temps,
            label:
              "Temperatures for " +
              fake_data.cycles[0][0].date +
              " through " +
              fake_data.cycles[0][fake_data.cycles.length - 1].date
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="graph">
        <Line data={this.state.chartData} options={{}} />
      </div>
    );
  }
}

export default Graph;
