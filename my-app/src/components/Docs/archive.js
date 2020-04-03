import React, {useEffect, useState} from "react";
import { Table } from 'semantic-ui-react'
import AddData from './AddData'
import { getData,addDoctor } from "../../services/patients";
import { getPatients } from "../../components/Firebase/fetchData";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const TableFixed = () => {
    const [data, setData] = useState([]);

    const fetchDoctors = () => getPatients().then(data => setData(data));
    
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
                        <Table.HeaderCell>{t('Data.25')}</Table.HeaderCell>
                        <Table.HeaderCell>{t('Rodzaj.19')}</Table.HeaderCell>
                        <Table.HeaderCell>{t('Wczytaj dokument.29')}</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                     <Table.Row>
                        <Table.Cell>
                        </Table.Cell> <Table.Cell>
                        </Table.Cell> <Table.Cell>
                        </Table.Cell>

                    </Table.Row>
                </Table.Body>
            </Table>
            <div className="doctors">
      <AddData doctorAdded={onDoctorAdded} />
      </div>
        </div>
    )
};

export default TableFixed;

