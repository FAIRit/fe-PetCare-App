import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image } from 'semantic-ui-react'
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
        idnumber

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
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <Modal trigger={<Button>{t('Dodaj pacjenta.35')}</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>{t('Dodaj pacjenta.35')}</Header>
          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
              <p>{t('Imię.2')}:</p>
              <div><input value={name} onChange={e => setName(e.currentTarget.value)}></input></div>

              <p>{t('Gatunek.3')}:</p>
              <input value={species} onChange={e => setSpecies(e.currentTarget.value)}></input></div>
              <div>
                <p>{t('Rasa.4')}:</p>
                <input value={breed} onChange={e => setBreed(e.currentTarget.value)}></input></div>

              <p>{t('Wiek.5')}:</p>
              <div><input value={age} onChange={e => setAge(e.currentTarget.value)}></input></div>

              <p>{t('Umaszczenie.6')}:</p>
              <div><input value={color} onChange={e => setColor(e.currentTarget.value)}></input></div>

              <p>{t('Opiekun.7')}:</p>
              <div><input value={owner} onChange={e => setOwner(e.currentTarget.value)}></input></div>

              <p>{t('Numer identyfikacyjny.8')}:</p>
              <div><input value={idnumber} onChange={e => setIdnumber(e.currentTarget.value)}></input></div>

              <button onSubmit={onsubmit}>{t('Zapisz.33')}</button></form></div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}


export default AddData;