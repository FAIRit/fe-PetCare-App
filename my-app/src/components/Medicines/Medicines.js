import React, { useEffect, useState } from "react";
import { Table} from 'semantic-ui-react'
import { getData, addDoctor } from "../../services/medicines";
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
            <Table.HeaderCell>Nazwa</Table.HeaderCell>
            <Table.HeaderCell>Rodzaj</Table.HeaderCell>
            <Table.HeaderCell>Dawkowanie</Table.HeaderCell>
            <Table.HeaderCell>Opis</Table.HeaderCell>
            <Table.HeaderCell>Czas kuracji</Table.HeaderCell>
            <Table.HeaderCell>*Lekarz przepisujący lek</Table.HeaderCell>
            <Table.HeaderCell>Uwagi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p key={item.id}>{item.name}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.type}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.dosage}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.other}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.date}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.doctor}</p>
            </Table.Cell>

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