import React from 'react'
import { Image, List } from 'semantic-ui-react'
import Link from './Link'
import Form from './NewFormMedicines'


const ListExampleCelled = () => (
  <>
  <container className="medicines">
  <List celled>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Gasprid</List.Header>
Lek, tabletki      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Semintra</List.Header>Lek, roztwór
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Neoplasmoxan</List.Header>
        Lek, tabletki
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Enroton Flavour</List.Header>
        Lek, tabletki
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Cystaid Plus</List.Header>
        Lek, tabletki
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Flora Balance</List.Header>
        Lek, tabletki
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Nefrokrill</List.Header>
        Lek, tabletki
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Kalmvet</List.Header>
        Lek, tabletki
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>CBD</List.Header>
        Lek, proszek
      </List.Content>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Płyn ringera</List.Header>
       Roztwór
      </List.Content>
    </List.Item>
  </List></container>
  <>
  <Link></Link>
  </>
  <br/>
  <p class="medicines">Dodaj nowy lek:</p>
    <Form>
</Form>
</>)

export default ListExampleCelled
