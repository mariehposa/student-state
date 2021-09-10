import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "../utils/data";

export default class StateTable extends PureComponent {
  render() {
    return (
      <BarChart
        width={1200}
        height={500}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="state" />
        <YAxis dataKey="No_of_students" />
        <Tooltip />
        <Legend />
        <Bar dataKey="No_of_students" fill="#82ca9d" />
      </BarChart>
    );
  }
}
