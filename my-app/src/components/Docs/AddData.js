import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image } from 'semantic-ui-react'
import FileUploader from './FileUploader'



const AddData = () => {
  const [data, setData] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [vetClinic, setVetClinic] = useState('');
  const [file, setFile] = useState('');




  function onsubmit(e){
e.preventDefault()

firebase.firestore()
.collection('docs')
.add({
  firstname,
  surname,
  vetClinic
})

.then(()=>{
  setFirstname('')
  setSurname('')
  setVetClinic('')


}
)
  }
    return (
      <Modal trigger={<Button>Dodaj dokument</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj dokument</Header>
         
      <div>
      <form className="doctors" onSubmit={onsubmit}><div>
      <p>Imię:</p>
            <input value={firstname} onChange={e=>setFirstname(e.currentTarget.value)}></input></div>
            <div>      <p>Imię:</p>

                <input value={surname} onChange={e=>setSurname(e.currentTarget.value)}></input></div>
                <p>Imię:</p>


                <div><input value={vetClinic} onChange={e=>setVetClinic(e.currentTarget.value)}></input></div>

            <button onSubmit={onsubmit}>Zapisz</button></form>
        </div> <FileUploader></FileUploader>
        </Modal.Description>
      </Modal.Content>
    </Modal>



    );
  }

  export default AddData