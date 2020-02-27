import React from 'react'
import { Table } from 'semantic-ui-react'
import Link from './Link'


const TableExampleFixed = () => (
  <div>
  <Table fixed>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Data</Table.HeaderCell>
        <Table.HeaderCell>Lekarz</Table.HeaderCell>
        <Table.HeaderCell>Diagnoza</Table.HeaderCell>
        <Table.HeaderCell>Zalecenia</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          John is an interesting boy but sometimes you don't really have enough
          room to describe everything you'd like
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          Jamie is a kind girl but sometimes you don't really have enough room
          to describe everything you'd like
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>
          Jill is an alright girl but sometimes you don't really have enough
          room to describe everything you'd like
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
      <Link></Link>
      </div>

)

export default TableExampleFixed