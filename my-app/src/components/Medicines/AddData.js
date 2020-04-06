import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal } from 'semantic-ui-react'



const AddData = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dosage, setDosage] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [other, setOther] = useState('');



  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('medicines')
      .add({
        name,
        type,
        dosage,
        date,
        doctor,
        other,
        description
      })

      .then(() => {
        setName('')
        setType('')
        setDosage('')
        setDate('')
        setDoctor('')
        setOther('')
        setDescription('')


      }
      )
  }
  return (
      <div>

<Modal trigger={<Button>Dodaj lek</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Dodaj lek</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>
                <p>Nazwa:</p>
                <input value={name} onChange={e => setName(e.currentTarget.value)}></input></div>
                <div>      <p>Rodzaj:</p>

                  <input value={type} onChange={e => setType(e.currentTarget.value)}></input></div>
                <p>Dawkowanie:</p>


                <div><input value={dosage} onChange={e => setDosage(e.currentTarget.value)}></input></div>
                <p>Opis:</p>


                <div><input value={description} onChange={e => setDescription(e.currentTarget.value)}></input></div>
                <p>Czas kuracji:</p>


                <div><input value={date} onChange={e => setDate(e.currentTarget.value)}></input></div>

                <p>Lekarz:</p>


                <div><input value={doctor} onChange={e => setDoctor(e.currentTarget.value)}></input></div>

                <p>Inne:</p>


                <div><input value={other} onChange={e => setOther(e.currentTarget.value)}></input></div>



                <button onSubmit={onsubmit}>Submit</button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>


    </div>



    );
  }

  export default AddData