import React from 'react'
import { List } from 'semantic-ui-react'
import Link from './Link'
import Form from './NewFormMedicines'
import Dropdown from './Dropdown'



const ListExampleCelled = () => (
  <>
  <div className="medicines">
  <List celled>
    <List.Item>
      <List.Content>
        <List.Header>Leukocyty</List.Header>
morfologia    </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Erytrocyty</List.Header>morfologia
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Hemoglobina</List.Header>
        morfologia      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Hematokryt</List.Header>
        morfologia      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>MCV</List.Header>
        morfologia      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>MCH</List.Header>
        morfologia      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Płytki krwi</List.Header>
        morfologia      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Neutrofile pałeczkowate</List.Header>
        rozmaz krwi obwodowej      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Neutrofile segmentowane</List.Header>
        rozmaz krwi obwodowej           </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Limfocyty</List.Header>
        rozmaz krwi obwodowej     
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Eozynofile</List.Header>
        rozmaz krwi obwodowej     
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Content>
        <List.Header>Monocyty</List.Header>
        rozmaz krwi obwodowej     
      </List.Content>
      <List.Header>*Wynik, jednostka, wartości referencyjne*</List.Header>
    </List.Item>
  </List></div>
  <Link></Link>
  <div className="results">
  <p>Dodaj nowy wynik</p>
  <Form></Form>
  <p>Zapisz plik</p>
  <Dropdown></Dropdown></div>
  </>
)

export default ListExampleCelled
