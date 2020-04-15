import React, { useState, useEffect, Fragment } from "react";
import { Table, Button, Modal, Icon } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';


const ContactTableRow = props => {
    const [data, setData] = useState(props.currentData);

    useEffect(() => {
        setData(props.currentData);
    }, [props]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    const { t } = useTranslation();
  

    return props.editing && props.currentData.id === props.item.id ? (
        <Fragment>
            <Table.Row key={props.item.id}>
                <Table.Cell><div className="ui input">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange} />
                </div><div className="ui input">
                        <input
                            type="text"
                            name="species"
                            value={data.species}
                            onChange={handleInputChange}
                        /></div>
                    <div className="ui input">
                        <input
                            type="text"
                            name="breed"
                            value={data.breed}
                            onChange={handleInputChange}
                        /></div>
                    <div className="ui input">
                        <input
                            type="text"
                            name="age"
                            value={data.age}
                            onChange={handleInputChange}
                        /></div>
                    <div className="ui input">
                        <input
                            type="text"
                            name="color"
                            value={data.color}
                            onChange={handleInputChange}
                        /></div><div className="ui input">
                        <input
                            type="text"
                            name="owner"
                            value={data.owner}
                            onChange={handleInputChange}
                        /></div><div className="ui input">
                        <input
                            type="text"
                            name="idnumber"
                            value={data.idnumber}
                            onChange={handleInputChange}
                        /></div>
                </Table.Cell>
                <Table.Cell>
                    <Button basic color='green'
                        onClick={() => props.updatedData(data)} >
                        Zapisz
            </Button>
                    <Button basic color='red'
                        onClick={() => props.setEditing(false)}>
                        Zrezygnuj
          </Button>

                </Table.Cell>
            </Table.Row>
        </Fragment>
    ) : (
            <Fragment>
                <Table.Row key={props.item.id}>
                    <Table.Cell>
                        {props.item.name}</Table.Cell>

                    <Table.Cell>
                        {props.item.species}</Table.Cell>

                    <Table.Cell>
                        {props.item.breed}</Table.Cell>

                    <Table.Cell>
                        {props.item.age}</Table.Cell>

                    <Table.Cell>
                        {props.item.color}</Table.Cell>

                    <Table.Cell>
                        {props.item.owner}</Table.Cell>
                    <Table.Cell>
                        {props.item.idnumber}</Table.Cell>

                    <Table.Cell>
                    <FontAwesomeIcon icon={faEdit} size='2x' color="lightgrey"
              onClick={() => {
                props.editRow(props.item);
              }}
            />
            <Modal trigger={<FontAwesomeIcon icon={faTrashAlt} size='2x' color="lightgrey" />
            } closeIcon>
              <Modal.Content>
                <p>
                  {t('Czy na pewno chcesz usunąć dane?.45')}
                </p>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => props.deleteData(props.item.id)} color='green' >
                  <Icon name='checkmark' /> {t('Tak.46')}
                </Button>
              </Modal.Actions>
            </Modal>
          </Table.Cell>
        </Table.Row>
      </Fragment>
    );
};
export default ContactTableRow;
