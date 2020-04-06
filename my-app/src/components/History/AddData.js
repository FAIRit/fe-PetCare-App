import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Button, Header, Modal, Image } from 'semantic-ui-react'


const AddData = () => {
  const [data, setData] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [dischargeDate, setDischargeDate] = useState('');
  const [vet, setVet] = useState('');
  const [doctor, setDoctor] = useState('');
  const [patientsCondition, setPatientsCondition] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [recommendations, setRecommendations] = useState('');



  function onsubmit(e) {
    e.preventDefault()

    firebase.firestore()
      .collection('history')
      .add({
        admissionDate,
        dischargeDate,
        vet,
        doctor,
        patientsCondition,
        diagnosis,
        recommendations
      })

      .then(() => {
        setAdmissionDate('')
        setDischargeDate('')
        setVet('')
        setDoctor('')
        setPatientsCondition('')
        setDiagnosis('')
        setRecommendations('')

      }
      )
  }
  return (
    <div>
      <Modal trigger={<Button>Dodaj lekarza</Button>}>
        <Modal.Content>
          <Modal.Description>
            <Header>Dodaj lekarza</Header>

            <div>
              <form className="doctors" onSubmit={onsubmit}><h4>Dodaj</h4><div>
                <p>Data przyjęcia:</p>
                <input value={admissionDate} onChange={e => setAdmissionDate(e.currentTarget.value)}></input></div>
                <div>      <p>Data wypisu:</p>

                  <input value={dischargeDate} onChange={e => setDischargeDate(e.currentTarget.value)}></input></div>
                <p>Lecznica:</p>


                <div><input value={vet} onChange={e => setVet(e.currentTarget.value)}></input></div>
                <p>Lekarz:</p>


                <div><input value={doctor} onChange={e => setDoctor(e.currentTarget.value)}></input></div>

                <p>Stan pacjenta:</p>


                <div><input value={patientsCondition} onChange={e => setPatientsCondition(e.currentTarget.value)}></input></div>

                <p>Diagnoza:</p>


                <div><input value={diagnosis} onChange={e => setDiagnosis(e.currentTarget.value)}></input></div>

                <p>Zalecenia:</p>


                <div><input value={recommendations} onChange={e => setRecommendations(e.currentTarget.value)}></input></div>



                <button onSubmit={onsubmit}>Submit</button></form>
            </div>
          </Modal.Description>
        </Modal.Content>
      </Modal>


    </div>




  );
}

export default AddData;
