import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import AddImage from '../Firebase/ImageUpload'
import { Button, Header, Modal, Image } from 'semantic-ui-react'
import FileUploader from './FileUploader'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const AddData = () => {
  const [data, setData] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [vetClinic, setVetClinic] = useState('');
  const [file, setFile] = useState('');


  function onsubmit(e){
e.preventDefault()

firebase.firestore()
.collection('docs')
.add({
  date,
  type,
})

.then(()=>{
  setDate('')
  setType('')

}
)
  }
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
}
    return (
      <Modal trigger={<Button>{t('Dodaj dokument.38')}</Button>}>
      <Modal.Content>
        <Modal.Description>
          <Header>{t('Dodaj dokument.38')}</Header>
         
      <div>
      <form className="doctors" onSubmit={onsubmit}><div>
      <p>{t('Data.25')}:</p>
            <input value={date} onChange={e=>setDate(e.currentTarget.value)}></input></div>
            <div>      <p>{t('Rodzaj.19')}:</p>

                <input value={type} onChange={e=>setType(e.currentTarget.value)}></input></div>

                <button onSubmit={onsubmit}>{t('Zapisz.33')}</button></form>
        </div> <FileUploader></FileUploader>
        </Modal.Description>
      </Modal.Content>
    </Modal>



    );
  }

  export default AddData