import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getData } from '../../services/doctors'
import Data from './AddData'

const TableExamplePagination = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Imię
</Table.HeaderCell>
            <Table.HeaderCell>Nazwisko</Table.HeaderCell>
            <Table.HeaderCell>Lecznica</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>  {data.map(item => <p key={item.id}>{item.firstname}</p>)}
            </Table.Cell>
            <Table.Cell>{data.map(item => <p key={item.id}>{item.surname}</p>)}</Table.Cell>
            <Table.Cell>{data.map(item => <p key={item.id}>{item.vet_clinic}</p>)}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="doctors">
      <Data></Data>

      </div>
    </>
  )
};

export default TableExamplePagination