import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image } from 'semantic-ui-react'



const AddData = () => {
  const [data, setData] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [vetClinic, setVetClinic] = useState('');



  function onsubmit(e){
e.preventDefault()

firebase.firestore()
.collection('doctors')
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
      <Modal trigger={<Button>Dodaj lekarza</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj lekarza</Header>
         
      <div>
      <form className="doctors" onSubmit={onsubmit}><h4>Dodaj</h4><div>
      <p>Imię:</p>
            <input value={firstname} onChange={e=>setFirstname(e.currentTarget.value)}></input></div>
            <div>      <p>Imię:</p>

                <input value={surname} onChange={e=>setSurname(e.currentTarget.value)}></input></div>
                <p>Imię:</p>


                <div><input value={vetClinic} onChange={e=>setVetClinic(e.currentTarget.value)}></input></div>

            <button onSubmit={onsubmit}>Submit</button></form>
        </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>



    );
  }

  export default AddData