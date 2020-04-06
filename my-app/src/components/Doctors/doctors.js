import React,{useState,useEffect} from 'react'
import firebase from '../Firebase/firebase'
import { Table } from 'semantic-ui-react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import AddData from './AddData'



// odczyt
function useData(){
    const [data,setData]= useState([]);

    useEffect(()=>{
        firebase.firestore().collection('doctors')
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



const PaginatedTable=()=>{
const data = useData();
const { t } = useTranslation();

function handleClick(lang) {
  i18next.changeLanguage(lang)
}

return (
    <>
      <div className="dropdown"></div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('Imię.2')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Nazwisko.10')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lecznica.11')}</Table.HeaderCell>
          </Table.Row>
          </Table.Header><Table.Body>{data.map(item => {
          return <Table.Row key={item.id}>
            <Table.Cell><p>{item.firstname}</p></Table.Cell>
            <Table.Cell><p>{item.surname}</p></Table.Cell>
            <Table.Cell><p>{item.vetClinic}</p></Table.Cell>
          </Table.Row>
        })}</Table.Body>
      </Table>
      <div className="doctors">
        <AddData/></div>
    </>
  )
}; export default PaginatedTable 

