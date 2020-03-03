import React, { useEffect, useState } from "react";
import { Image, List } from 'semantic-ui-react'
import Form from './NewFormMedicines'
import { Icon, Menu, Table } from 'semantic-ui-react'

import { getData } from '../services/medicines'

const ListExampleCelled = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (

  <div className="medicines">
  <List celled>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header> { data.map(item => <p key={item.id}> Nazwa:{item.name} <br/>Rodzaj:{item.type} <br/>Dawkowanie:{item.dosage}</p>) }
</List.Header>
 </List.Content>
<List.Header></List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header> 
</List.Header>
 </List.Content>
<List.Header></List.Header>
    </List.Item>
  </List>
     
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
  <br/>
  <p className="medicines">Dodaj nowy lek:</p>
    <Form>
</Form></div>
)};

export default ListExampleCelled;
