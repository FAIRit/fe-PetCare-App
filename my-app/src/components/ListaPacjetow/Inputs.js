import React, { useState, useEffect, Fragment } from "react";
import { Table, Button } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


const ContactTableRow = props => {
    const [data, setData] = useState(props.currentData);

    useEffect(() => {
        setData(props.currentData);
    }, [props]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    return props.editing && props.currentData.id === props.item.id ? (
        <Fragment>
            <Table.Row key={props.item.id}>
                <Table.Cell><div class="ui input">
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange} />
                </div><div class="ui input">
                        <input
                            type="text"
                            name="species"
                            value={data.species}
                            onChange={handleInputChange}
                        /></div>
                    <div class="ui input">
                        <input
                            type="text"
                            name="breed"
                            value={data.breed}
                            onChange={handleInputChange}
                        /></div>
                    <div class="ui input">
                        <input
                            type="text"
                            name="age"
                            value={data.age}
                            onChange={handleInputChange}
                        /></div>
                    <div class="ui input">
                        <input
                            type="text"
                            name="color"
                            value={data.color}
                            onChange={handleInputChange}
                        /></div><div class="ui input">
                        <input
                            type="text"
                            name="owner"
                            value={data.owner}
                            onChange={handleInputChange}
                        /></div><div class="ui input">
                        <input
                            type="text"
                            name="idnumber"
                            value={data.idnumber}
                            onChange={handleInputChange}
                        /></div>
                </Table.Cell>
                <Table.Cell>
                <Button basic color='green'
                        onClick={() => props.updateData(data)}
                    >
                        Zapisz
          </Button>
                    <Button basic color='red'
                        onClick={() => props.setEditing(false)}
                    >
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
                        <FontAwesomeIcon icon={faTrashAlt} size='2x' color="lightgrey"
                            onClick={() => props.deleteData(props.item.id)}
                        />
                    </Table.Cell>
                </Table.Row>
            </Fragment>
        );
};

export default ContactTableRow;
