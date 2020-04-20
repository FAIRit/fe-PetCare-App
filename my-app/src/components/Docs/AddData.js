import React, { useState } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal,Input } from 'semantic-ui-react'
import FileUploader from './FileUploader'
import { useTranslation } from 'react-i18next';


const AddData = () => {
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [file, setFile] = useState('');


  const onChangeDate = e => setDate(e.currentTarget.value)
  const onChangeType = e => setType(e.currentTarget.value)
 // const onChangeFile = e => setFile(e.currentTarget.value)


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

  const onFileSaved = (url) => 
setFile(url); 

  return (
    <Modal trigger={<Button>{t('Dodaj dokument.38')}</Button>}>
      <Modal.Content className="modal-content">
        <Modal.Description>
          <Header>{t('Dodaj dokument.38')}</Header>

          <div>
            <form className="doctors" onSubmit={onsubmit}><div>
              <p>{t('Data.25')}:</p>
              <Input size="small" value={date} onChange={onChangeDate}></Input></div>
              <div>      <p>{t('Rodzaj.19')}:</p>

                <Input size="small" value={type} onChange={onChangeType}></Input></div>

       <FileUploader fileSaved={onFileSaved}/>
                              <Button onSubmit={onsubmit} className="add-submit-button">{t('Zapisz.33')}</Button></form>
          </div> 

        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

}
export default AddData