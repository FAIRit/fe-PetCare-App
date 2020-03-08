import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { getData, addDoctor } from "../../services/doctors";
import AddData from "./AddData";

const TableExamplePagination = () => {
  const [data, setData] = useState([]);

  const fetchDoctors = () => getData().then(data => setData(data));

  const onDoctorAdded = doctor => addDoctor(doctor).then(fetchDoctors);

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Imię</Table.HeaderCell>
            <Table.HeaderCell>Nazwisko</Table.HeaderCell>
            <Table.HeaderCell>Lecznica</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              {data.map(item => (
                <p key={item.id}>{item.firstname}</p>
              ))}
            </Table.Cell>
            <Table.Cell>
              {data.map(item => (
                <p key={item.id}>{item.surname}</p>
              ))}
            </Table.Cell>
            <Table.Cell>
              {data.map(item => (
                <p key={item.id}>{item.vetClinic}</p>
              ))}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <div className="doctors">
        <AddData doctorAdded={onDoctorAdded} />
      </div>
    </>
  );
};

export default TableExamplePagination;
