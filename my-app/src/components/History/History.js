import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { Icon, Menu } from 'semantic-ui-react'
import Data from './AddData'
import { getData } from '../../services/history'





const TableExampleFixed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

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

    <Table.Body>
      <Table.Row>
        <Table.Cell>{data.map(item => <p key={item.id}>{item.admission_date}</p>)}</Table.Cell>
        <Table.Cell>{data.map(item => <p key={item.id}>{item.discharge_date}</p>)}</Table.Cell>

        <Table.Cell>{data.map(item => <p key={item.id}>{item.vet}</p>)}</Table.Cell>
        <Table.Cell>{data.map(item => <p key={item.id}>{item.doctor}</p>)}</Table.Cell>
        <Table.Cell> {data.map(item => <p key={item.id}>{item.patients_condition}</p>)}
        </Table.Cell>
        <Table.Cell> {data.map(item => <p key={item.id}>{item.diagnosis}</p>)}</Table.Cell>
        <Table.Cell>{data.map(item => <p key={item.id}>{item.recommendations}</p>)}</Table.Cell>
       
      </Table.Row>
     
   <Table.Row>
        <Table.Cell>07.02.2020</Table.Cell>
        <Table.Cell></Table.Cell>

        <Table.Cell>Przychodnia CrisVet Gdynia, ul. Warszawska</Table.Cell>
        <Table.Cell>dr Agnieszka Antczak</Table.Cell>

        <Table.Cell>
          example
        </Table.Cell>
        <Table.Cell>
example        </Table.Cell>
        <Table.Cell>
example        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
 <Data> </Data>
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
  
  </div>
  )
};

export default TableExampleFixed