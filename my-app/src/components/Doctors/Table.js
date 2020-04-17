import React, { useState, useEffect, Fragment } from "react";
import { Table, Input } from 'semantic-ui-react'
import firebase from "../Firebase/firebase";
import { useTranslation } from 'react-i18next';
import Paginator from 'react-hooks-paginator';
import Inputs from "./Inputs";


function useData(filter = '') {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    firebase
      .firestore()
      .collection("doctors")
      .orderBy('created', 'asc')
      .startAfter(0)
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const normalizedFilter = filter.toLowerCase();
        const filteredData = newData.filter(item => item.surname.toLowerCase().includes(normalizedFilter));

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

  const pageLimit = 10;

  const [offset, setOffset] = React.useState(0);
  const [currentData, setCurrentData] = useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);


  return (
    <Fragment>

      <>{t('Wyszukaj lekarza.42')}: </> <Input size='large' icon='search' onChange={onInputChange} placeholder={t('Wyszukaj po nazwisku.73')} />

      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t('Imię.2')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Nazwisko.10')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Lecznica.11')}</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.length > 0 ? (
            currentData.map(item => (
              <Inputs
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