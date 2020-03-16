import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getData, addDoctor } from "../../services/history";
import AddData from './AddData'


const TableFixed = () => {
  const [data, setData] = useState([]);

  const fetchDoctors = () => getData().then(data => setData(data));

  const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);

  useEffect(() => {
    fetchDoctors();
  }, []);
  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Data przyjęcia</Table.HeaderCell>
            <Table.HeaderCell>Data wypisu</Table.HeaderCell>
            <Table.HeaderCell>Lecznica</Table.HeaderCell>
            <Table.HeaderCell>Lekarz</Table.HeaderCell>
            <Table.HeaderCell>Informacja o stanie pacjenta</Table.HeaderCell>
            <Table.HeaderCell>Diagnoza</Table.HeaderCell>
            <Table.HeaderCell>Zalecenia</Table.HeaderCell>
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