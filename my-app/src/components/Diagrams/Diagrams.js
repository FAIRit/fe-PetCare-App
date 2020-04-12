import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import React, { useState, useEffect, Fragment } from "react";
import { Table, Tab } from 'semantic-ui-react'
import firebase from "../Firebase/firebase";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


function useData(filter = '') {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
      firebase
          .firestore()
          .collection("diagrams")
          .onSnapshot(snapshot => {
              const newData = snapshot.docs.map(doc => ({
                  id: doc.id,
                  ...doc.data()
              }));

              const normalizedFilter = filter.toLowerCase();
              const filteredData = newData.filter(item => item.name.toLowerCase().includes(normalizedFilter));

              setData(filteredData);
              setIsLoading(false);
          });

      }, [filter]);


  return data;
}

const Rechart = props => {
  const [filter, setFilter] = useState('');

  const data = useData(filter);
  const { t } = useTranslation();

  const onInputChange = event => setFilter(event.currentTarget.value);

  function handleClick(lang) {
      i18next.changeLanguage(lang)
  }

  return (
<div>
<>{t('Wyszukaj diagram.')}: </> <input onChange={onInputChange} /> 

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
      </LineChart>
    </div>
  );

};

export default Rechart;
