import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import firebase from '../Firebase/firebase'
import AddData from './AddData'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


// odczyt
function useData(){
  const [data,setData]= useState([]);

  useEffect(()=>{
      firebase.firestore().collection('medicines')
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
            <Table.HeaderCell>{t('Nazwa.18')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Rodzaj.19')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Dawkowanie.20')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Opis.21')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Czas kuracji.22')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lekarz przepisujący lek.23')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Uwagi.24')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p key={item.id}>{item.name}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.type}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.dosage}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.other}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.date}</p></Table.Cell>
            <Table.Cell><p key={item.id}>{item.doctor}</p>
            </Table.Cell>

          </Table.Row>
        })}
        </Table.Body>        

      </Table>
      <div className="doctors">
      <AddData/>
      </div>
    </div>
  )
};

export default TableFixed