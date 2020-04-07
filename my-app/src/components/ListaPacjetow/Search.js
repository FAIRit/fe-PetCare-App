/*import React, { useState, useEffect } from 'react';
import { Table } from 'semantic-ui-react'
import { getData } from "../../services/patients";
import { useTranslation } from 'react-i18next';
import { getPatients } from "../../components/Firebase/fetchData";



function App() {
  const [data, setData] = useState([]);
  const [loading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);
  const fetchDoctors = () => getPatients().then(data => setData(data));


  useEffect(() => {
    fetchDoctors();
  }, []);


  useEffect(() => {
    setFilteredPatients(
      data.filter(data =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);


  useEffect(() => {
    setFilteredPatients(
      data.filter(data =>
        data.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data]);

  if (loading) {
    return <p>Ładuję listę...</p>;
  }  


  return (

    <div>

      <h4>Wyszukiwanie</h4>
      <input
        type="text"
        placeholder="Search Patient"
        onChange={e => setSearch(e.target.value)}

      />
      {filteredPatients.map((patient, id) => (
        <PatientDetail key={id} {...patient} />
      ))}
    </div>
  );
}

const PatientDetail = props => {
  const { name, breed, age, color, ownerContact, idnumber, type } = props;
  const { t } = useTranslation();


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

        <Table.Body>
          <Table.Row>
            <Table.Cell>  <p>{name}</p></Table.Cell>
            <Table.Cell><p>{type}</p></Table.Cell>
            <Table.Cell><p>{breed}</p></Table.Cell>
            <Table.Cell><p> {age}</p></Table.Cell>
            <Table.Cell><p> {color}</p></Table.Cell>
            <Table.Cell><p>{ownerContact}</p></Table.Cell>
            <Table.Cell><p>{idnumber}</p></Table.Cell>

          </Table.Row>
        </Table.Body>
      </Table>

    </div>
  )
};


export default App;
*/