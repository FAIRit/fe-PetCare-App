import React from 'react'
import { Image, List } from 'semantic-ui-react'
import Form from './NewFormMedicines'
import { Icon, Menu, Table } from 'semantic-ui-react'



const ListExampleCelled = () => (
  <div className="medicines">
  <List celled>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>
>Gasprid</List.Header>
Lek, tabletki      </List.Content>
<List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
      <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Semintra</List.Header>Lek, roztwór
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Neoplasmoxan</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Enroton Flavour</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Cystaid Plus</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Flora Balance</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Nefrokrill</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Kalmvet</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>CBD</List.Header>
        Lek, proszek
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Nifuroksazyd</List.Header>
        Lek, tabletki
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
    <List.Item>
    <Image avatar src='https://cdn3.vectorstock.com/i/1000x1000/01/92/sick-heartbeat-healthy-medicine-bottle-pills-vector-14360192.jpg' />
      <List.Content>
        <List.Header>Płyn ringera</List.Header>
       Roztwór
      </List.Content>
      <List.Header>Dawkowanie:</List.Header>
    </List.Item>
  </List>
     
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
  <br/>
  <p className="medicines">Dodaj nowy lek:</p>
    <Form>
</Form></div>
)

export default ListExampleCelled
