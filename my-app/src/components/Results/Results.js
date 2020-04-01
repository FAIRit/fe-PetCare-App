import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getData, addDoctor } from "../../services/results";
import AddData from './AddData'
import { getResults } from "../../components/Firebase/fetchData";



const TableFixed = () => {
  const [data, setData] = useState([]);

  const fetchDoctors = () => getResults().then(data => setData(data));

  const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);


  useEffect(() => {
    fetchDoctors();
  }, []);
  
  return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Data</Table.HeaderCell>
            <Table.HeaderCell>Nazwa</Table.HeaderCell>
            <Table.HeaderCell>Rodzaj</Table.HeaderCell>
            <Table.HeaderCell>Wynik</Table.HeaderCell>
            <Table.HeaderCell>Jednostka</Table.HeaderCell>
            <Table.HeaderCell>Jednostka referencyjna</Table.HeaderCell>
            <Table.HeaderCell>Uwagi</Table.HeaderCell>
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