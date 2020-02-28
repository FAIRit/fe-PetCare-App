import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Link from './Link'
import Options from './AnimalOptions'

const ModalModalExample = () => (
  <Modal trigger={<Button>Karta pacjenta</Button>}>
    <Modal.Header>Imię pacjenta</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://media.istockphoto.com/photos/fluffy-gray-kitten-of-a-russian-blue-cat-picture-id858701710?k=6&m=858701710&s=612x612&w=0&h=cxMmreqn3-__M9gNKWa8f-fqzzUfjoyPkSSJjUVlanM=' />
      <Modal.Description>
        <Header>Nazwa:<Options></Options>       
</Header>
 <p>Wiek:</p>
        <p>Waga:</p>
        <p>Przebyte choroby:</p>
        <p>Inne ważne informacje:</p>
        <p>Dane kontaktowe opiekuna:</p>
        <Link></Link>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample