import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { addDoctor,getData } from "../../services/patients";
import AddData from './AddData'
import Image from '../Firebase/ImageUpload'
import Modal from './petCard'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const TableFixed = () => {
    const [data, setData] = useState([]);

    const fetchDoctors = () => getData().then(data => setData(data));
    
    const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const { t } = useTranslation();

    function handleClick(lang) {
      i18next.changeLanguage(lang)
    }
  

    return (
        <div>
            <Table fixed>
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

                <Table.Body>{data.map(item => {
                    return <Table.Row key={item.id}>
                        <Table.Cell> <p key={item.id}>{item.name} </p><Modal></Modal></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.type}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.breed}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.age}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.color}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.owner}</p></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.idnumber}</p>
                        </Table.Cell>
                        <Table.Cell>

                        </Table.Cell>

                    </Table.Row>
                })}
                </Table.Body>
            </Table>
            <div className="doctors">
      <AddData doctorAdded={onDoctorAdded} />
      </div>
        </div>
    )
};

export default TableFixed;

