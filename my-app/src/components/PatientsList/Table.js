import React, { useState, useEffect, Fragment } from "react";
import { Table, Tab } from 'semantic-ui-react'
import firebase from "../Firebase/firebase";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import Input from "./Inputs";


function useData(filter = '') {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    firebase
      .firestore()
      .collection("patients")
      .orderBy('created', 'asc')
      .startAfter(0)
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const normalizedFilter = filter.toLowerCase();
        const filteredData = newData.filter(data => data.name.toLowerCase().includes(normalizedFilter));

        setData(filteredData);
        setIsLoading(false);
      });



  }, [filter]);


  return data;
}

const PaginatedTable = props => {
  const [filter, setFilter] = useState('');

  const data = useData(filter);
  const { t } = useTranslation();

  const onInputChange = event => setFilter(event.currentTarget.value);

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }

  return (
    <Fragment><div>
      <>{t('Wyszukaj pacjenta.39')}: </><input onChange={onInputChange} /></div>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('Imię.2')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Gatunek.3')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Rasa.4')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Wiek.5')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Umaszczenie.6')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Opiekun.7')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Numer identyfikacyjny.8')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Zdjęcie.9')}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {data.length > 0 ? (
            data.map(data => (
              <Input
                key={data.id}
                data={data}
                datas={props.datas}
                editRow={props.editRow}
                deleteData={props.deleteData}
                editing={props.editing}
                setEditing={props.setEditing}
                currentData={props.currentData}
                updatedData={props.updatedData}
              />
            ))
          ) : (

              <Table.Row>
                <Table.Cell>{t('Brak danych.50')}</Table.Cell>
              </Table.Row>
            )}
        </Table.Body>

      </Table>
    </Fragment>
  );
};
export default PaginatedTable;
