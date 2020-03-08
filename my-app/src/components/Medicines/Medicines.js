import React, { useEffect, useState } from "react";
import { Image, List } from 'semantic-ui-react'
import { Icon, Menu } from 'semantic-ui-react'
import { getData } from '../../services/medicines'
import Data from './AddData'



const ListExampleCelled = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (
    <div >
    <List celled className="medicines">
      <List.Item>
      <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
        <List.Content>
        <List.Header> { data.map(item => <p key={item.id}> Nazwa:{item.name} <br/>Rodzaj:{item.type} <br/>Dawkowanie:{item.dosage}</p>) }
</List.Header>
 </List.Content>
<List.Header></List.Header>
    </List.Item>
    <List.Item>
      <List.Content>
      <List.Header> 
</List.Header>
 </List.Content>
<List.Header></List.Header>
    </List.Item>
  </List>
  <Data className="new-medicines"></Data>
</div>
)};
 export default ListExampleCelled;