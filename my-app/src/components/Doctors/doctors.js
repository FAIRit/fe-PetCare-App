import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getData } from '../../services/doctors'
import Data from './AddData'

const PaginatedTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (
    <>
    <div class="dropdown"></div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Imię
</Table.HeaderCell>
            <Table.HeaderCell>Nazwisko</Table.HeaderCell>
            <Table.HeaderCell>Lecznica</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p>{item.firstname}</p></Table.Cell>
            <Table.Cell><p>{item.surname}</p></Table.Cell>
            <Table.Cell><p>{item.vetClinic}</p></Table.Cell>
          </Table.Row>
        })}

        </Table.Body>
      </Table>
      <div className="doctors">
        <Data></Data>

      </div>
    </>
  )
};

export default PaginatedTable 