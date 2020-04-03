import React, { useEffect, useState } from "react";
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { getData } from '../../services/patients'


const PatientCardModal = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      getData()
        .then(data => setData(data));
    }, [])
  
    return (
    <React.Fragment>{data.map(item => {
      return <Modal trigger={<Button> <p> Karta pacjenta</p> </Button>}>
      <Modal.Content>
          <Modal.Description>
            <Header> <p key={item.id}>{item.name}</p>   </Header>
           <Modal.Content image>
        <Image wrapped size='medium' src='' />
           </Modal.Content>
        <div>
          <form className="doctors">
          <br/><p>Imię:</p>
          <p key={item.id}>{item.name}</p>            
          <p>{item.age}</p>
        <b>Waga: </b> <p>{item.weight}</p>
          <b>Przebyte choroby:</b><p>{item.medicalHistory}</p>
          <b>Dodatkowe informacje:</b><p>{item.other}</p>

          </form>
          </div>
          </Modal.Description>
        </Modal.Content> 
      </Modal>  })}     

      </React.Fragment>

  
    );
    }

    export default PatientCardModal;