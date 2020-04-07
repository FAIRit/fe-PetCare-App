import React, { useState, useEffect, Fragment } from "react";
import { Table, Tab } from 'semantic-ui-react'


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
                    <button
                        onClick={() => props.setEditing(false)}
                    >
                        Zrezygnuj
          </button>
                    <button
                        onClick={() => props.updateData(data)}
                    >
                        Zapisz
          </button>
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
                        <button
                            onClick={() => {
                                props.editRow(props.item);
                            }}
                        >
                            Edytuj
          </button>
                        <button
                            onClick={() => props.deleteData(props.item.id)}
                        >
                            Usuń
          </button>
                    </Table.Cell>
                </Table.Row>
            </Fragment>
        );
};

export default ContactTableRow;
