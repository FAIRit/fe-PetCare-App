import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal, Image } from 'semantic-ui-react'


const AddData = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');
  const [owner, setOwner] = useState('');
  const [idnumber, setIdnumber] = useState('');




  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('patients')
      .add({
        name,
        species,
        breed,
        age,
        color,
        owner,
        idnumber
      })

      .then(() => {
        setName('')
        setSpecies('')
        setBreed('')
        setAge('')
        setColor('')
        setOwner('')
        setIdnumber('')
      }
      )
  }
  return (
    <div>

    <Modal trigger={<Button>Dodaj pacjenta</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>Dodaj pacjenta</Header>

          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
              <p>Imię:</p>
              <div><input value={name} onChange={e => setName(e.currentTarget.value)}></input></div>
              
              <p>Gatunek:</p>
              <input value={species} onChange={e => setSpecies(e.currentTarget.value)}></input></div>
              <div>     
               <p>Rasa:</p>
                <input value={breed} onChange={e => setBreed(e.currentTarget.value)}></input></div>

              <p>Wiek:</p>
              <div><input value={age} onChange={e => setAge(e.currentTarget.value)}></input></div>

              <p>Umaszczenie:</p>
              <div><input value={color} onChange={e => setColor(e.currentTarget.value)}></input></div>

              <p>Opiekun:</p>
              <div><input value={owner} onChange={e => setOwner(e.currentTarget.value)}></input></div>

              <p>Numer identyfikacyjny:</p>
              <div><input value={idnumber} onChange={e => setIdnumber(e.currentTarget.value)}></input></div>



              <button onSubmit={onsubmit}>Submit</button></form>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  
  </div>


    );
  }

  export default AddData;