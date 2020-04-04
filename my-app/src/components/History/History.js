import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getHistory } from "../../components/Firebase/fetchData";
import { addDoctor } from "../../services/history";
import AddData from './AddData'
import { useTranslation } from 'react-i18next';


const TableFixed = () => {
  const [data, setData] = useState([]);

  const fetchDoctors = () => getHistory().then(data => setData(data));

  const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);

  useEffect(() => {
    fetchDoctors();
  }, []);


  const { t } = useTranslation();


  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('Data przyjęcia.12')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Data wypisu.13')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lecznica.11')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lekarz.14')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Informacja o stanie pacjenta.15')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Diagnoza.16')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Zalecenia.17')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p key={item.id}>{item.admissionDate}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.dischargeDate}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.vet}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.doctor}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.patientsCondition}</p>
            </Table.Cell>
            <Table.Cell><p key={item.id}>{item.diagnosis}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.recommendations}</p></Table.Cell>
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