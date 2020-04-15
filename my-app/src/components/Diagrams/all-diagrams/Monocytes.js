import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { getData } from "../../../services/diagrams/Monocytes"


const Rechart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (


<div>
      <p>Monocyty</p>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" id ="kreatynina" dataKey="norma" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" id ="kreatynina" dataKey="wynik" stroke="#82ca9d" />
      </LineChart>
    </div>
  );

};

export default Rechart;