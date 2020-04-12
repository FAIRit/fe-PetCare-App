import React, { Component } from 'react'
import {Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import i18next from 'i18next';
import Logout from './LoginPanel/Logout'
import En from '../components/Languages/Flags/en'
import Pl from '../components/Languages/Flags/pl'

function handleClick(lang) {
  i18next.changeLanguage(lang)
}

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
        <Menu.Item as={Link} to='./Docs'
          name='Dokumenty' as={Link} to='./Archiwum'
          active={activeItem === 'Dokumenty'}
          onClick={this.handleItemClick}
        />
        <Menu.Item as={Link} to='./Diagramy'
          name='Diagramy' as={Link} to='./Diagramy'
          active={activeItem === 'Diagramy'}
          onClick={this.handleItemClick}
        />  
        <Menu.Menu position='right'>
          
      <div className="language" style ={{width:'100%', padding:'2rem, 0'}}>
      <button onClick={()=>handleClick('pl')}><Pl/></button>
      <button onClick={()=>handleClick('en')}><En/></button>
      </div>     
      <Logout></Logout> </Menu.Menu>
      </Menu>
    )
  }
}