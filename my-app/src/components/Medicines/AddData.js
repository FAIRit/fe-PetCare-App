import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const AddData = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [dosage, setDosage] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [doctor, setDoctor] = useState('');
  const [other, setOther] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeType = e => setType(e.currentTarget.value);
  const onChangeDosage = e => setDosage(e.currentTarget.value);
  const onChangeDoctor = e => setDoctor(e.currentTarget.value);
  const onChangeDate = e => setDate(e.currentTarget.value);
  const onChangeOther = e => setOther(e.currentTarget.value);

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
        description,
        created: Date.now() 

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
  const { t } = useTranslation();
  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div>

      <Modal trigger={<Button>{t('Dodaj lek.36')}</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>{t('Dodaj lek.36')}</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>
                <p>{t('Nazwa.18')}:</p>
                <input value={name} onChange={onChangeName}></input></div>

                <div><p>{t('Rodzaj.19')}:</p>
                  <input value={type} onChange={onChangeType}></input></div>

                <p>{t('Dawkowanie.20')}:</p>
                <div><input value={dosage} onChange={onChangeDosage}></input></div>

                <p>{t('Lekarz przepisujący lek.23')}:</p>

                <div><input value={doctor} onChange={onChangeDoctor}></input></div>

                <p>{t('Czas kuracji.22')}:</p>

                <div><input value={date} onChange={onChangeDate}></input></div>

                <p>{t('Uwagi.24')}:</p>

                <div><input value={other} onChange={onChangeOther}></input></div>


                <button onSubmit={onsubmit}>{t('Zapisz.33')}</button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>


    </div>



  );
}

export default AddData