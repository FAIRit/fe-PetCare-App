import React, { useState } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal, Image } from 'semantic-ui-react'
import FileUploader from './FileUploader'
import { useTranslation } from 'react-i18next';


const AddData = () => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState('');


  const onChangeDate = e => setDate(e.currentTarget.value)
  const onChangeType = e => setType(e.currentTarget.value)
  const onChangeFile = e => setFile(e.currentTarget.value)


  function onsubmit(e) {
    e.preventDefault()



    firebase.firestore()
      .collection('docs')
      .add({
        date,
        type,
        file,
        created: Date.now()

      })

      .then(() => {
        setDate('')
        setType('')
        setFile('')

      }
      )
  }

  const { t } = useTranslation();


  return (
    <Modal trigger={<Button>{t('Dodaj dokument.38')}</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>{t('Dodaj dokument.38')}</Header>

          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
              <p>{t('Data.25')}:</p>
              <input value={date} onChange={onChangeDate}></input></div>
              <div>      <p>{t('Rodzaj.19')}:</p>

                <input value={type} onChange={onChangeType}></input></div>

                <FileUploader  /> 
                              <button onSubmit={onsubmit}>{t('Zapisz.33')}</button></form>
          </div> 

        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

}
export default AddData