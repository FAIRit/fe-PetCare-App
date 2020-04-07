import React, { useState, useEffect, Fragment } from "react";
import { Table, Tab } from 'semantic-ui-react'
import firebase from "../Firebase/firebase";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Input from "./Inputs";



function useData() {
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    firebase
      .firestore()
      .collection("docs")
      .onSnapshot(snapshot => {
        const newData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setData(newData);
        setIsLoading(false);
      });

  }, []);


  return data;
}

const PaginatedTable = props => {
  const data = useData();
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
    }
  return (
    <Fragment>
                  <Table unstackable>
          <Table.Header>
            <Table.Row>
            <Table.HeaderCell>{t('Data.25')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Rodzaj.19')}</Table.HeaderCell>
            <Table.HeaderCell>{t('Plik.29')}</Table.HeaderCell>

            
            </Table.Row>
          </Table.Header>

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
              <Table.Cell>Brak danych</Table.Cell>
            </Table.Row>
          )}</Table>
    </Fragment>
  );
};

export default PaginatedTable;

































