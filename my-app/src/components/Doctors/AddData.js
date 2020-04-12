import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const AddData = () => {
  const [data, setData] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [vetClinic, setVetClinic] = useState('');



  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('doctors')
      .add({
        firstname,
        surname,
        vetClinic
      })

      .then(() => {
        setFirstname('')
        setSurname('')
        setVetClinic('')


      }
      )
  }
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <Modal trigger={<Button>{t('Dodaj lekarza.32')}</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>{t('Dodaj lekarza.32')}</Header>

          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
              <p>{t('Imię.2')}:</p>
              <input value={firstname} onChange={e => setFirstname(e.currentTarget.value)}></input></div>
              <div>      <p>{t('Nazwisko.10')}:</p>

                <input value={surname} onChange={e => setSurname(e.currentTarget.value)}></input></div>
              <p>{t('Lecznica.11')}:</p>


              <div><input value={vetClinic} onChange={e => setVetClinic(e.currentTarget.value)}></input></div>

              <button onSubmit={onsubmit}>{t('Zapisz.33')}:</button></form>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>



  );
}

export default AddData