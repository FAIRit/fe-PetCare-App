import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import Card from './petCard.js'
import { Link } from 'react-router-dom'

export default class MenuSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>

      <Menu.Item as={Link} to='./lista-pacjentow'
      name='Lista Pacjentów'
      active={activeItem === 'Lista Pacjentów'}
      onClick={this.handleItemClick}
    />
        <Card></Card>

        <Menu.Item as={Link} to='./leki'
          name='Leki'
          active={activeItem === 'Leki'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='./Calendar'
          name='Kalendarz'
          active={activeItem === 'Kalendarz'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='./History'
          name='Historia leczenia'
          active={activeItem === 'Historia leczenia'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='./doctors'
          name='Lekarze'
          active={activeItem === 'Lekarze'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='./wyniki'
          name='Wyniki badań'
          active={activeItem === 'Wyniki badań'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='./Diagramy'
          name='Diagramy' as={Link} to='./Diagramy'
          active={activeItem === 'Diagramy'}
          onClick={this.handleItemClick}
        />
           <Menu.Item as={Link} to='./Docs'
          name='Archiwum' as={Link} to='./Archiwum'
          active={activeItem === 'Archiwum'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>

      </Menu>
    )
  }
}