import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image, Input } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const AddData = () => {
  const [data, setData] = useState('');
  const [species, setSpecies] = useState('');
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');
  const [owner, setOwner] = useState('');
  const [idnumber, setIdnumber] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeSpecies = e => setSpecies(e.currentTarget.value);
  const onChangeBreed = e => setBreed(e.currentTarget.value);
  const onChangeAge = e => setAge(e.currentTarget.value);
  const onChangeColor = e => setColor(e.currentTarget.value);
  const onChangeOwner = e => setOwner(e.currentTarget.value);
  const onChangeID = e => setIdnumber(e.currentTarget.value);


  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('patients')
      .add({
        name,
        breed,
        species,
        age,
        color,
        owner,
        idnumber,
        created: Date.now() 

      })

      .then(() => {
        setName('')
        setBreed('')
        setSpecies('')
        setAge('')
        setColor('')
        setOwner('')
        setIdnumber('')
      }
      )
  }
  const { t } = useTranslation();


  return (
    <Modal trigger={<Button>{t('Dodaj pacjenta.35')}</Button>}>
      <Modal.Content className="modal-content">
        <Modal.Description>
          <Header>{t('Dodaj pacjenta.35')}</Header>
          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
            <div><p>{t('Imię.2')}:</p>
              <Input size="small" value={name} onChange={onChangeName}></Input></div>

              <p>{t('Gatunek.3')}:</p>
              <Input size="small" value={species} onChange={onChangeSpecies}></Input></div>
              <div>
                <p>{t('Rasa.4')}:</p>
                <Input size="small" value={breed} onChange={onChangeBreed}></Input></div>

              <p>{t('Wiek.5')}:</p>
              <div><Input size="small" value={age} onChange={onChangeAge}></Input></div>

              <p>{t('Umaszczenie.6')}:</p>
              <div><Input size="small" value={color} onChange={onChangeColor}></Input></div>

              <p>{t('Opiekun.7')}:</p>
              <div><Input size="small" value={owner} onChange={onChangeOwner}></Input></div>

              <p>{t('Numer identyfikacyjny.8')}:</p>
              <div><Input size="small" value={idnumber} onChange={onChangeID}></Input></div>

              <Button onSubmit={onsubmit} className="add-submit-button">{t('Zapisz.33')}</Button></form></div>
              
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}


export default AddData;