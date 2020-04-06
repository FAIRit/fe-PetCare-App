import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal, Image } from 'semantic-ui-react'


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
  return (
      <div>

<Modal trigger={<Button>Dodaj wynik</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Dodaj wynik</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><div>
                <p>Nazwa:</p>
                <input value={name} onChange={e => setName(e.currentTarget.value)}></input></div>
                <div>      <p>Rodzaj:</p>

                  <input value={type} onChange={e => setType(e.currentTarget.value)}></input></div>
                <p>Data:</p>


                <div><input value={date} onChange={e => setDate(e.currentTarget.value)}></input></div>
                <p>Wynik:</p>


                <div><input value={result} onChange={e => setResult(e.currentTarget.value)}></input></div>
                <p>Jednostka:</p>


                <div><input value={unit} onChange={e => setUnit(e.currentTarget.value)}></input></div>

                <p>Jednostka referencyjna:</p>


                <div><input value={referenceunit} onChange={e => setReferenceunit(e.currentTarget.value)}></input></div>

                <p>Uwagi:</p>


                <div><input value={other} onChange={e => setOther(e.currentTarget.value)}></input></div>



                <button onSubmit={onsubmit}>Submit</button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>

    </div>


    );
  }

  export default AddData