import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal,Input } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';


  const AddData = () => {
  const [data, setData] = useState('');
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [vetClinic, setVetClinic] = useState('');


  const onChangeName = e => setFirstname(e.currentTarget.value)
  const onChangeSurname = e => setSurname(e.currentTarget.value)
  const onChangeVet = e => setVetClinic(e.currentTarget.value)

  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('doctors')
      .add({ 
        firstname,
        surname,
        vetClinic,    
        created: Date.now() 
      })

      .then(() => {
        setFirstname('')
        setSurname('')
        setVetClinic('')


      }
      )
  }
  const { t } = useTranslation();

  return (
    <Modal trigger={<Button>{t('Dodaj lekarza.32')}</Button>}>
      <Modal.Content className="modal-content">
        <Modal.Description>
          <Header>{t('Dodaj lekarza.32')}</Header>

          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
              <p>{t('Imię.2')}:</p>
              <Input value={firstname} onChange={onChangeName}></Input></div>
              <div>      <p>{t('Nazwisko.10')}:</p>

                <Input value={surname} onChange={onChangeSurname}></Input></div>
              <p>{t('Lecznica.11')}:</p>


              <div><Input value={vetClinic} onChange={onChangeVet}></Input></div>

              <Button onSubmit={onsubmit} className="add-submit-button">{t('Zapisz.33')}:</Button></form>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>



  );
}

export default AddData