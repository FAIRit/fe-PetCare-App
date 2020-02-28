import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Form from './NewForm'

const TableExamplePagination = () => (
  <>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Imię</Table.HeaderCell>
        <Table.HeaderCell>Nazwisko</Table.HeaderCell>
        <Table.HeaderCell>Lecznica</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>/-/</Table.Cell>
        <Table.Cell>/-/</Table.Cell>
        <Table.Cell>Przychodnia weterynaryjna VetCare, Gdynia</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Agnieszka</Table.Cell>
        <Table.Cell>Antczak</Table.Cell>
        <Table.Cell>Przychodnia weterynaryjna CrisVet, Gdynia</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>imię</Table.Cell>
        <Table.Cell>nazwisko</Table.Cell>
        <Table.Cell>przychodnia</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  <p class="doctors">Dodaj nowego lekarza:</p>

<div className="doctors">  
  <Form></Form>
  </div>
  </>
)

export default TableExamplePagination