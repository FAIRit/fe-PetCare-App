import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import React, { useState, useEffect } from "react";
import { getData } from "../../services/diagrams/Urea";
import Urea from './all-diagrams/Urea';
import Eosinophils from './all-diagrams/Eosinophils';
import Hemoglobin from './all-diagrams/Hemoglobin';
import Leukocytes from './all-diagrams/Leukocytes'
import Monocytes from './all-diagrams/Monocytes';
import MCH from './all-diagrams/MCH';
import MCV from './all-diagrams/MCV';
import { useTranslation } from 'react-i18next';
import { Card } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'



const Rechart = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  const { t } = useTranslation();

  return (

    <div>
      <br /><br />
      <div className="diagrams-card">  <Card className="card"
        link
        header='Diagramy'
        description={[
        ].join('')}
      > <h3><i>{t('Diagramy.60')}</i></h3>
        <p>{t('Pamiętaj, że ze względu na różne sposoby określania jednostek referencyjnych oraz ich górnej i dolnej granicy wyniku, rezultaty, które widzisz na diagramach są oparte o uśrednione wartości i mogą nie być równe jednostkom wskazanym w wynikach badań.78')}.</p></Card></div>
      <div className="diagrams">
        <h3>{t('Kreatynina.72')}</h3>


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
          <Line type="monotone" id="kreatynina" dataKey="norma" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" id="kreatynina" dataKey="wynik" stroke="#82ca9d" />
        </LineChart>
        <br /><br />
        <Urea />
        <br /><br />
        <Eosinophils />
        <br /><br />
        <Hemoglobin />
        <br /><br />
        <Leukocytes />
        <br /><br />
        <Monocytes />
        <br /><br />
        <MCH />
        <br /><br />
        <MCV />
      </div>
      <a href="#" className="top-button"><FontAwesomeIcon icon={faAngleDoubleUp} size='4x' color="lightgrey" /></a>

    </div>
  );

};

export default Rechart;