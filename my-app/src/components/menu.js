import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import i18next from 'i18next';
import Logout from './LoginPanel/Logout'
import En from '../components/Languages/Flags/en'
import Pl from '../components/Languages/Flags/pl'
import { Translation } from 'react-i18next';


function handleClick(lang) {
  i18next.changeLanguage(lang)
}

const handleClickPL = e => handleClick('pl');
const handleClickEN = e => handleClick('en');


export default class MenuSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <Translation>
        {
          (t) =>
            <Menu secondary>
              <Menu.Item as={Link} to='./PatientsList'
                name={t('Lista Pacjentów.53')}
                active={activeItem === 'Lista Pacjentów.53'}
                onClick={this.handleItemClick}
              />

              <Menu.Item as={Link} to='./leki'
                name={t('Leki.54')}
                active={activeItem === 'Leki.54'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='./Calendar'
                name={t('Kalendarz.55')}
                active={activeItem === 'Kalendarz'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='./History'
                name={t('Historia Leczenia.56')}
                active={activeItem === 'Historia leczenia'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='./doctors'
                name={t('Lekarze.57')}
                active={activeItem === 'Lekarze'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='./wyniki'
                name={t('Wyniki Badań.58')}
                active={activeItem === 'Wyniki badań'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='./Docs'
                name={t('Archiwum.59')}
                as={Link} to='./Archiwum'
                active={activeItem === 'Archiwum'}
                onClick={this.handleItemClick}
              />
              <Menu.Item as={Link} to='./Diagramy'
                name={t('Diagramy.60')} as={Link} to='./Diagramy'
                active={activeItem === 'Diagramy'}
                onClick={this.handleItemClick}
              />

              <Menu.Menu position='right'>
                <div className="language" style={{ width: '100%', padding: '2rem, 0' }}>
                  <button onClick={handleClickPL}><Pl /></button>
                  <button onClick={handleClickEN}><En /></button>
                </div>
                <Logout></Logout> </Menu.Menu>
            </Menu>}
      </Translation>
    )
  }
}