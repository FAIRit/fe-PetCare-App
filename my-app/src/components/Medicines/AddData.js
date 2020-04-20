import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal,Input } from 'semantic-ui-react'
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

  return (
    <div>

      <Modal trigger={<Button>{t('Dodaj lek.36')}</Button>}>
        <Modal.Content className="modal-content">
          <Modal.Description>
            <Header>{t('Dodaj lek.36')}</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>
                <p>{t('Nazwa.18')}:</p>
                <Input size="small" value={name} onChange={onChangeName}></Input></div>

                <div><p>{t('Rodzaj.19')}:</p>
                  <Input size="small"value={type} onChange={onChangeType}></Input></div>

                <p>{t('Dawkowanie.20')}:</p>
                <div><Input size="small" value={dosage} onChange={onChangeDosage}></Input></div>

                <p>{t('Lekarz przepisujący lek.23')}:</p>

                <div><Input size="small"value={doctor} onChange={onChangeDoctor}></Input></div>

                <p>{t('Czas kuracji.22')}:</p>

                <div><Input size="small" value={date} onChange={onChangeDate}></Input></div>

                <p>{t('Uwagi.24')}:</p>

                <div><Input size="small" value={other} onChange={onChangeOther}></Input></div>


                <Button onSubmit={onsubmit} className="add-submit-button">{t('Zapisz.33')}</Button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>


    </div>



  );
}

export default AddData