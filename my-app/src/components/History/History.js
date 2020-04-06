
import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import AddData from './AddData'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import firebase from '../Firebase/firebase'



// odczyt
function useData(){
  const [data,setData]= useState([]);

  useEffect(()=>{
      firebase.firestore().collection('history')
      .onSnapshot((snapshot)=>{
          const newData = snapshot.docs.map((doc)=>({
              id:doc.id,
              ...doc.data()
          }))
setData(newData)
      })

  },[])
  return data

}



const TableFixed=()=>{
const data = useData();
const { t } = useTranslation();

function handleClick(lang) {
i18next.changeLanguage(lang)
}

return (
    <div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('Data przyjęcia.12')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Data wypisu.13')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lecznica.11')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lekarz.14')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Informacja o stanie pacjenta.15')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Diagnoza.16')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Zalecenia.17')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p key={item.id}>{item.admissionDate}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.dischargeDate}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.vet}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.doctor}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.patientsCondition}</p>
            </Table.Cell>
            <Table.Cell><p key={item.id}>{item.diagnosis}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.recommendations}</p></Table.Cell>
          </Table.Row>
        })}
        </Table.Body>
      </Table>
      <div className="doctors">
      <AddData />
      </div>
    </div>
  )
};

export default TableFixed