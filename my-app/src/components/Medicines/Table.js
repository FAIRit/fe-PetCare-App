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
            .collection("medicines")
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

    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <Fragment>
            <input onChange={onInputChange} />
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
                            <Table.Cell>{t('Brak danych.34')}</Table.Cell>    
 </Table.Row>
                    )}</Table>
        </Fragment>
    );
};

export default PaginatedTable;
