import React from 'react'
import { Table } from 'semantic-ui-react'
//import Link from './Link'
import { Icon, Menu } from 'semantic-ui-react'




const TableExampleFixed = () => (
  <div>
  <Table fixed>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Data przyjecia</Table.HeaderCell>
      <Table.HeaderCell>Data wypisu</Table.HeaderCell>
      <Table.HeaderCell>Lecznica</Table.HeaderCell>
        <Table.HeaderCell>Lekarz</Table.HeaderCell>
        <Table.HeaderCell>Informacja o stanie pacjenta</Table.HeaderCell>
        <Table.HeaderCell>Diagnoza</Table.HeaderCell>
        <Table.HeaderCell>Zalecenia</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>12.12.2019</Table.Cell>
        <Table.Cell>05.02.2020</Table.Cell>

        <Table.Cell>Przychodnia VetCare Gdynia, ul. Abrahama</Table.Cell>
        <Table.Cell> /wielu lekarzy/</Table.Cell>
        <Table.Cell> Kot wolnożyjący, wiek około 12 lat, znaleziony w Gdyni. Niewykastrowany, historia zdrowia nieznana.
        Temperatura 40 st. C. Kot nie utrzymuje się samodzielnie na łapach, usypia na stole.
        Widoczny duży strup na uchu nieznanego pochodzenia. Po zdjęciu strupa z ucha stwierdzono marwicę - konieczna amputacja 
        i pobranie materiału do badań. Kot zatrzymany na obserwacji.
        </Table.Cell>
        <Table.Cell> Nowotwor złośliwy - kostniakomięsak - w lewym uchu.
          Przewlekła niewydolność nerek, stan zapalny pęcherza,
        piasek w pęcherzu, nieprawidłowe wartości prób wątrobowych, anemia. Prawdopodobnie na skutek przebytego 
        wypadku komunikacyjnego uszkodzenie kręgosłupa (nieleczone, samozrośnięte), uszkodzenie nerwów dna miednicy oraz złamany ogon.</Table.Cell>
        <Table.Cell>Kot zatrzymany na obserwacji w lecznicy. Ucho do amputacji. Konieczne dodatkowe badania</Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>07.02.2020</Table.Cell>
        <Table.Cell></Table.Cell>

        <Table.Cell>Przychodnia CrisVet Gdynia, ul. Warszawska</Table.Cell>
        <Table.Cell>dr Agnieszka Antczak</Table.Cell>

        <Table.Cell>
          Kot opuścił lecznicę VetCare 05.02.2020, po długim leczeniu. Kot choruje na przewlekłą niewydolność nerek.
          Po zmianie otoczenia przestał oddawać mocz.
        </Table.Cell>
        <Table.Cell>
         W badaniu USG powiększony pęcherz, stan zapalny pęcherza.
        </Table.Cell>
        <Table.Cell>
          Antybiotykoteriapia, podłączenie cewnika. Przewidywany około tygodniowy pobyt w lecznicy.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
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
  
  </div>
)

export default TableExampleFixed