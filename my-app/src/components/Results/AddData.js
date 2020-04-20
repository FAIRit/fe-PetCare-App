import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal, Input } from 'semantic-ui-react'
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

  const onChangeDate = e => setDate(e.currentTarget.value);
  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeType = e => setType(e.currentTarget.value);
  const onChangeResult = e => setResult(e.currentTarget.value);
  const onChangeUnit = e => setUnit(e.currentTarget.value);
  const onChangeReference = e => setReferenceunit(e.currentTarget.value);
  const onChangeOther = e => setOther(e.currentTarget.value);

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
        other,
        created: Date.now() 
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

  return (
    <div>

      <Modal trigger={<Button>{t('Dodaj wynik.37')}</Button>}>
        <Modal.Content className="modal-content">
          <Modal.Description>
            <Header>{t('Dodaj wynik.37')}</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>

                <p>{t('Data.25')}:</p>
                <div><Input size="small" value={date} onChange={onChangeDate}></Input></div>

                <p>{t('Nazwa.18')}:</p>
                <Input size="small" value={name} onChange={onChangeName}></Input></div>
                <div>

                  <p>{t('Rodzaj.19')}:</p>
                  <Input size="small" value={type} onChange={onChangeType}></Input></div>

                <p>{t('Wynik.26')}:</p>
                <div><Input size="small"value={result} onChange={onChangeResult}></Input></div>

                <p>{t('Jednostka.27')}:</p>
                <div><Input size="small" value={unit} onChange={onChangeUnit}></Input></div>

                <p>{t('Jednostka referencyjna.28')}:</p>
                <div><Input size="small" value={referenceunit} onChange={onChangeReference}></Input></div>

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