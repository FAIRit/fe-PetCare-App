import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getDoctors } from "../../components/Firebase/fetchData";
import { addDoctor } from "../../services/doctors"
import AddData from './AddData'



const PaginatedTable = () => {
  const [data, setData] = useState([]);
  const fetchDoctors = () => getDoctors().then(data => setData(data)); 
  const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors); 
  
  useEffect(() => {
    fetchDoctors();
  }, []); 
  
  
  return (
    <>
      <div className="dropdown"></div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Imię
</Table.HeaderCell>
            <Table.HeaderCell>Nazwisko</Table.HeaderCell>
            <Table.HeaderCell>Lecznica</Table.HeaderCell>
          </Table.Row>
        </Table.Header>        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p>{item.firstname}</p></Table.Cell>
            <Table.Cell><p>{item.surname}</p></Table.Cell>
            <Table.Cell><p>{item.vetClinic}</p></Table.Cell>
          </Table.Row>
        })}        </Table.Body>
      </Table>
      <div className="doctors">
        <AddData doctorAdded={onDoctorAdded} />      </div>
    </>
  )
}; export default PaginatedTable 