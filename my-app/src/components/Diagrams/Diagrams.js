import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React, { useState, useEffect, Fragment } from "react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { getData } from "../../services/data";

const Rechart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (


<div>
      <p>Mocznik</p>
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
        <Line type="monotone" dataKey="norma" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="wynik" stroke="#82ca9d" />
      </LineChart><p>Kreatynina</p>
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
        <Line type="monotone" dataKey="norma" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="wynik" stroke="#82ca9d" />
          <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="norma" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="wynik" stroke="#82ca9d" />
      </LineChart>
    </div>
  );

};

export default Rechart;