import React, { Component } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import formatData from "../utils/formatData";

const test = [
  { name: null, fluid: "Blood" },
  { name: null, fluid: "None" },
  { name: null, fluid: "Sticky" },
  { name: null, fluid: "Creamy" },
  { name: null, fluid: "Egg White" },
  { name: null, fluid: "Watery" }
];

class Graph extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={test.concat(
              formatData(this.props.data.cycles[this.props.currentCycle - 1])
            )}
            margin={{
              top: 20,
              right: 50,
              bottom: 20,
              left: 50
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              type="number"
              dataKey="cycleDay"
              interval={0}
              ticks={this.props.data.cycles[this.props.currentCycle - 1].map(
                (_, index) => index + 1
              )}
              domain={[1, this.props.data.cycles[0].length]}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[97, 99]}
              stroke="#292b2c"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              type="category"
              stroke="#0275d8"
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="fluid" barSize={5} yAxisId="right" fill="#0275d8" />
            <Line
              type="monotone"
              dataKey="temp"
              yAxisId="left"
              strokeWidth={3}
              stroke="#292b2c"
            />
            <Line
              type="monotone"
              dataKey="max"
              yAxisId="left"
              strokeWidth={3}
              dot={false}
              stroke="#d9534f"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Graph;
