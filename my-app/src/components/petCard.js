import React, { useEffect, useState } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { getData } from '../services/pet'

const ModalModalExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

 return(
 <Modal trigger={<Button>Karta pacjenta</Button>}>
    <Modal.Header > { data.map(item => <p key={item.id}>{item.name}</p>) }</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://media.istockphoto.com/photos/fluffy-gray-kitten-of-a-russian-blue-cat-picture-id858701710?k=6&m=858701710&s=612x612&w=0&h=cxMmreqn3-__M9gNKWa8f-fqzzUfjoyPkSSJjUVlanM=' />
      <Modal.Description>
        <Header> { data.map(item => <p key={item.id}>{item.type}</p>) }
</Header>
<b>Wiek:</b>{ data.map(item => <p key={item.id}>{item.age}</p>) }
        <b>Waga:</b>{ data.map(item => <p key={item.id}>{item.weight}</p>) }
        <b>Przebyte choroby:</b>{ data.map(item => <p key={item.id}>{item.medical_history}</p>) }
        <b>Dodatkowe informacje:</b> { data.map(item => <p key={item.id}>{item.other}</p>) }
        <b> Dane opiekuna:</b>{ data.map(item => <p key={item.id}>{item.owner_contact}</p>) }
      </Modal.Description>
    </Modal.Content>
  </Modal>
)};

export default ModalModalExample;