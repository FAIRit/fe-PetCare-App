import React, { useEffect, useState } from "react";
import { Table, Menu, Icon} from 'semantic-ui-react'
import { getData } from '../../services/medicines'
import Data from './AddData'



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
      <Table.HeaderCell>Nazwa</Table.HeaderCell>
      <Table.HeaderCell>Rodzaj</Table.HeaderCell>
      <Table.HeaderCell>Dawkowanie</Table.HeaderCell>
        <Table.HeaderCell>Opis</Table.HeaderCell>
        <Table.HeaderCell>*Data rozpoczęcia</Table.HeaderCell>
        <Table.HeaderCell>*Lekarz przepisujący lek</Table.HeaderCell>
        <Table.HeaderCell>Uwagi</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>{data.map(item => { return <Table.Row key={item.id}>
<Table.Cell><p key={item.id}>{item.name}</p></Table.Cell>
             <Table.Cell><p key={item.id}>{item.type}</p></Table.Cell>
             <Table.Cell><p key={item.id}>{item.dosage}</p></Table.Cell>
        <Table.Cell><p key={item.id}>{item.other}</p></Table.Cell>
        <Table.Cell><p></p></Table.Cell>
        <Table.Cell><p key={item.id}>{item.doctor}</p>
        </Table.Cell>
     
 </Table.Row>})}
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