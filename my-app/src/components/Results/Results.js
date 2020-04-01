import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getData, addDoctor } from "../../services/results";
import AddData from './AddData'
import { getResults } from "../../components/Firebase/fetchData";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const TableFixed = () => {
  const [data, setData] = useState([]);

  const fetchDoctors = () => getResults().then(data => setData(data));

  const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);


  useEffect(() => {
    fetchDoctors();
  }, []);

  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('Data.25')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Nazwa.18')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Rodzaj.19')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Wynik.26')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Jednostka.27')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Jednostka referencyjna.28')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Uwagi.24')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p>{item.date}</p></Table.Cell>
            <Table.Cell><p>{item.name}</p></Table.Cell>
            <Table.Cell><p>{item.type}</p></Table.Cell>
            <Table.Cell><p>{item.result}</p></Table.Cell>
            <Table.Cell><p>{item.unit}</p></Table.Cell>
            <Table.Cell><p>{item.referenceUnit}</p></Table.Cell>
          </Table.Row>
        })}
        </Table.Body>
      </Table>
      <div className="doctors">
      <AddData doctorAdded={onDoctorAdded} />
      </div>
    </div>
  )
};


export default TableFixed