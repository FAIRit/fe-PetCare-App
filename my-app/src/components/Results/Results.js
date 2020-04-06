import React, { useState, useEffect } from 'react';
import firebase from '../Firebase/firebase'
import { Table } from 'semantic-ui-react'
import AddData from './AddData'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

// odczyt
function useData(){
  const [data,setData]= useState([]);

  useEffect(()=>{
      firebase.firestore().collection('results')
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
            <Table.HeaderCell>{t('Data.25')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Nazwa.18')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Rodzaj.19')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Wynik.26')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Jednostka.27')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Jednostka referencyjna.28')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Uwagi.24')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p>{item.date}</p></Table.Cell>
            <Table.Cell><p>{item.name}</p></Table.Cell>
            <Table.Cell><p>{item.type}</p></Table.Cell>
            <Table.Cell><p>{item.result}</p></Table.Cell>
            <Table.Cell><p>{item.unit}</p></Table.Cell>
            <Table.Cell><p>{item.referenceunit}</p></Table.Cell>
            <Table.Cell><p>{item.other}</p></Table.Cell>

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