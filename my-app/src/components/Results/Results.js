import React, { useEffect, useState } from "react";
import { List } from 'semantic-ui-react'
import { getData } from '../../services/results'
import Data from './AddData'


const ListExampleCelled = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (
  <>
  <div className="medicines">
  <List celled>
    <List.Item>
      <List.Content>
        <List.Header> {data.map(item => <p key={item.id}>{item.name} <br/> {item.type}</p>)}</List.Header>
       </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>example</List.Header>example
      </List.Content>
    </List.Item>
   
  </List></div>
  <div className="results">
<Data></Data>
  </div>
  </>
)};

export default ListExampleCelled;
