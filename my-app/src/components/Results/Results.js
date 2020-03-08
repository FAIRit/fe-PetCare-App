import React, { useEffect, useState } from "react";
import { Table, Menu, Icon} from 'semantic-ui-react'
import { getData } from '../../services/results'
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
      <Table.HeaderCell>Data</Table.HeaderCell>
      <Table.HeaderCell>Nazwa</Table.HeaderCell>
      <Table.HeaderCell>Rodzaj</Table.HeaderCell>
      <Table.HeaderCell>Wynik</Table.HeaderCell>
      <Table.HeaderCell>Jednostka</Table.HeaderCell>
        <Table.HeaderCell>Jednostka referencyjna</Table.HeaderCell>
        <Table.HeaderCell>Uwagi</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>{data.map(item => { return <Table.Row key={item.id}>
      <Table.Cell><p key={item.id}>{item.date}</p></Table.Cell>
<Table.Cell><p key={item.id}>{item.name}</p></Table.Cell>
             <Table.Cell><p key={item.id}>{item.type}</p></Table.Cell>
             <Table.Cell><p key={item.id}>{item.result}</p></Table.Cell>
             <Table.Cell><p key={item.id}>{item.unit}</p></Table.Cell>
        <Table.Cell><p key={item.id}>{item.referenceUnit}</p></Table.Cell>
        <Table.Cell><p></p></Table.Cell>

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