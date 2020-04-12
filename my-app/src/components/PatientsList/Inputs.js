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

    return props.editing && props.currentData.id === props.data.id ? (
        <Fragment>
            <Table.Row key={props.data.id}>
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
                        onClick={() => props.updatedData(data)}
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
                <Table.Row key={props.data.id}>
                    <Table.Cell>
                        {props.data.name}</Table.Cell>

                    <Table.Cell>
                        {props.data.species}</Table.Cell>

                    <Table.Cell>
                        {props.data.breed}</Table.Cell>

                    <Table.Cell>
                        {props.data.age}</Table.Cell>

                    <Table.Cell>
                        {props.data.color}</Table.Cell>

                    <Table.Cell>
                        {props.data.owner}</Table.Cell>
                    <Table.Cell>
                        {props.data.idnumber}</Table.Cell>

                    <Table.Cell>
                        <FontAwesomeIcon icon={faEdit} size='2x' color="lightgrey"
                            onClick={() => {
                                props.editRow(props.data);
                            }}
                        />
                        <FontAwesomeIcon icon={faTrashAlt} size='2x' color="lightgrey"
                            onClick={() => props.deleteData(props.data.id)}
                        />
                    </Table.Cell>
                </Table.Row>
            </Fragment>
        );
};

export default ContactTableRow;
