import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import firebase from '../Firebase/firebase'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AddData from './AddData'



// odczyt
function useData(){
  const [data,setData]= useState([]);

  useEffect(()=>{
      firebase.firestore().collection('patients')
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
                        <Table.HeaderCell>Imię</Table.HeaderCell>
                        <Table.HeaderCell>Gatunek</Table.HeaderCell>
                        <Table.HeaderCell>Rasa</Table.HeaderCell>
                        <Table.HeaderCell>Wiek</Table.HeaderCell>
                        <Table.HeaderCell>Umaszczenie</Table.HeaderCell>
                        <Table.HeaderCell>Opienkun</Table.HeaderCell>
                        <Table.HeaderCell>Numer identyfikacyjny</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>{data.map(item => {
                    return <Table.Row key={item.id}>
                        <Table.Cell>  <p key={item.id}>{item.name}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.species}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.breed}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.age}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.color}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.owner}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.idnumber}</p>

                        </Table.Cell>

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

export default TableFixed;

