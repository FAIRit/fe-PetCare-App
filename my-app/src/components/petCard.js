
import React, { useEffect, useState } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { getData } from '../services/pets'

const PatientCardModal = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData()
      .then(data => setData(data));
  }, [])

  return (
    <Modal trigger={<Button>Karta pacjenta</Button>}>
      <Modal.Header > {data.map(item => <p key={item.id}>{item.name}</p>)}</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://media.istockphoto.com/photos/fluffy-gray-kitten-of-a-russian-blue-cat-picture-id858701710?k=6&m=858701710&s=612x612&w=0&h=cxMmreqn3-__M9gNKWa8f-fqzzUfjoyPkSSJjUVlanM=' />
        <Modal.Description>
          <Header> 
          </Header>{data.map(item => <React.Fragment key={item.id}>
            <b>Wiek: </b> <p>{item.age}</p>
        <b>Waga: </b> <p>{item.weight}</p>
          <b>Przebyte choroby:</b><p>{item.medicalHistory}</p>
          <b>Dodatkowe informacje:</b><p>{item.other}</p>
          <b> Dane opiekuna:</b><p>{item.ownerContact}</p>
          </React.Fragment>)}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
};

export default PatientCardModal;