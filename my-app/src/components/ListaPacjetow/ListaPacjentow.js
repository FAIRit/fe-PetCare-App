import React, { useEffect, useState } from "react";
import { Table } from 'semantic-ui-react'
import { getData,addDoctor } from "../../services/patients";
import { getPatients } from "../../components/Firebase/fetchData";
import AddData from './AddData'
import Image from '../Firebase/ImageUpload'
import Modal from './petCard'



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
                        <Table.HeaderCell>Imię</Table.HeaderCell>
                        <Table.HeaderCell>Gatunek</Table.HeaderCell>
                        <Table.HeaderCell>Rasa</Table.HeaderCell>
                        <Table.HeaderCell>Wiek</Table.HeaderCell>
                        <Table.HeaderCell>Umaszczenie</Table.HeaderCell>
                        <Table.HeaderCell>Opienkun</Table.HeaderCell>
                        <Table.HeaderCell>Numer identyfikacyjny</Table.HeaderCell>
                        <Table.HeaderCell>Zdjęcie</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>{data.map(item => {
                    return <Table.Row key={item.id}>
                        <Table.Cell><Modal> <p key={item.id}>{item.name} </p></Modal></Table.Cell>
                        <Table.Cell><p key={item.id}>{item.species}</p></Table.Cell>
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

