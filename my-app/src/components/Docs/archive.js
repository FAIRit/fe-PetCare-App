

import React, {useEffect, useState} from "react";
import { Table } from 'semantic-ui-react'
import AddData from './AddData'
import { getData,addDoctor } from "../../services/patients";
import { getPatients } from "../../components/Firebase/fetchData";






const TableFixed = () => {
    const [data, setData] = useState([]);

    const fetchDoctors = () => getPatients().then(data => setData(data));
    
    const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);

    useEffect(() => {
        fetchDoctors();
    }, []);


    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                        <Table.HeaderCell>Rodzaj dokumentu</Table.HeaderCell>
                        <Table.HeaderCell>Wczytaj dokument</Table.HeaderCell>

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

