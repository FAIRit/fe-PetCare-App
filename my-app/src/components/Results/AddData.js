import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal, Image } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const AddData = () => {
  const [data, setData] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [result, setResult] = useState('');
  const [date, setDate] = useState('');
  const [unit, setUnit] = useState('');
  const [referenceunit, setReferenceunit] = useState('');
  const [other, setOther] = useState('');


  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('results')
      .add({
        name,
        type,
        date,
        result,
        unit,
        referenceunit,
        other
      })

      .then(() => {
        setName('')
        setType('')
        setDate('')
        setResult('')
        setUnit('')
        setReferenceunit('')
        setOther('')
      }
      )
  }
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div>

      <Modal trigger={<Button>{t('Dodaj wynik.37')}</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>{t('Dodaj wynik.37')}</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>

                <p>{t('Data.25')}:</p>
                <div><input value={date} onChange={e => setDate(e.currentTarget.value)}></input></div>

                <p>{t('Nazwa.18')}:</p>
                <input value={name} onChange={e => setName(e.currentTarget.value)}></input></div>
                <div>

                  <p>{t('Rodzaj.19')}:</p>
                  <input value={type} onChange={e => setType(e.currentTarget.value)}></input></div>

                <p>{t('Wynik.26')}:</p>
                <div><input value={result} onChange={e => setResult(e.currentTarget.value)}></input></div>

                <p>{t('Jednostka.27')}:</p>
                <div><input value={unit} onChange={e => setUnit(e.currentTarget.value)}></input></div>

                <p>{t('Jednostka referencyjna.28')}:</p>
                <div><input value={referenceunit} onChange={e => setReferenceunit(e.currentTarget.value)}></input></div>

                <p>{t('Uwagi.24')}:</p>
                <div><input value={other} onChange={e => setOther(e.currentTarget.value)}></input></div>


                <button onSubmit={onsubmit}>{t('Zapisz.33')}</button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>

    </div>


  );
}

export default AddData