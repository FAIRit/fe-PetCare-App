
import React, { Component } from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

class FirstModal extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })
  render() {
    const { open } = this.state

    return (
      <Modal
        open={open}
        onOpen={this.open}
        onClick={this.close}
        size='small'
        trigger={
          <Button primary icon>
            Zaakceptuj <Icon name='right chevron' />
          </Button>
        }

      >
        <Modal.Header>Tryb pacjenta</Modal.Header>
        <Modal.Content>
          <p>Poprawnie załadowano dane!</p>
        </Modal.Content>
        <Modal.Actions>
          <Button icon='check' content='Ok' onClick={this.close} />
        </Modal.Actions>
      </Modal>
    )
  }
}

const SelectModal = () => (
  <Modal trigger={<Button>Tryb pacjenta</Button>}>
    <Modal.Header>Tryb pacjenta</Modal.Header>
    <Modal.Content image>
      <div className='image'>
        <Icon name='right arrow' />
      </div>
      <Modal.Description>
        <p>Czy na pewno chcesz przejść do trybu pacjenta?</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <FirstModal />
    </Modal.Actions>
  </Modal>
)

export default SelectModal
