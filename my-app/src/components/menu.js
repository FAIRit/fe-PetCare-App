import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import Card from './pet-card.js'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
            <Card></Card>

        <Menu.Item
          name='Leki'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Kalendarz'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='Historia leczenia'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          name='Lekarze'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
           <Menu.Item
          name='Wyniki badań'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          name='Diagramy'
          active={activeItem === 'friends'}
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

