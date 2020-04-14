import React, { useState, useEffect, Fragment } from "react";
import { Table, Tab } from 'semantic-ui-react'
import firebase from "../Firebase/firebase";
import { useTranslation } from 'react-i18next';
import Input from "./Inputs";
import Paginator from 'react-hooks-paginator';

function useData(filter = '', initialPage = 1) {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    firebase
      .firestore()
      .collection("medicines")
      .orderBy('created', 'asc')
      .startAfter(0)
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const normalizedFilter = filter.toLowerCase();
        const filteredData = newData.filter(item => item.name.toLowerCase().includes(normalizedFilter));

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


  //paginacja
  const pageLimit = 10;

  const [offset, setOffset] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
 


return (
  <Fragment>
    <>{t('Wyszukaj lek.40')}: </><input onChange={onInputChange} />
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{t('Nazwa.18')}</Table.HeaderCell>
          <Table.HeaderCell>{t('Rodzaj.19')}</Table.HeaderCell>
          <Table.HeaderCell>{t('Dawkowanie.20')}</Table.HeaderCell>
          <Table.HeaderCell>{t('Lekarz przepisujący lek.23')}</Table.HeaderCell>
          <Table.HeaderCell>{t('Opis.21')}</Table.HeaderCell>
          <Table.HeaderCell>{t('Czas kuracji.22')}</Table.HeaderCell>
          <Table.HeaderCell>{t('Uwagi.24')}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.length > 0 ? (
          data.map(item => (
            <Input
              key={item.id}
              item={item}
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
    <Paginator
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pagePrevText="«"
        pageNextText="»"
      />
  </Fragment>
);
};


export default PaginatedTable;