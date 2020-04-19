import React, { useState, useEffect } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { getData } from "../../../services/diagrams/Leukocytes";
import { useTranslation } from 'react-i18next';


const Rechart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  const { t } = useTranslation();

  return (

<div>
<h3>{t('Leukocyty.69')}</h3>
      <LineChart
          width={700}
          height={400}
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