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
                <Table.Cell>
                    <input
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handleInputChange}/>
               
                    <input
                        type="text"
                        name="type"
                        value={data.type}
                        onChange={handleInputChange}
                    />
            
                    <input
                        type="text"
                        name="dosage"
                        value={data.dosage}
                        onChange={handleInputChange}
                    />
                
                    <input
                        type="text"
                        name="doctor"
                        value={data.doctor}
                        onChange={handleInputChange}
                    />
              
                    <input
                        type="text"
                        name="other"
                        value={data.other}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="time"
                        value={data.time}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="recommendations"
                        value={data.recommendations}
                        onChange={handleInputChange}
                    />
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
                        {props.item.date}</Table.Cell>

                    <Table.Cell>
                        {props.item.name}</Table.Cell>

                    <Table.Cell>
                        {props.item.type}</Table.Cell>

                    <Table.Cell>
                        {props.item.result}</Table.Cell>

                        <Table.Cell>
                        {props.item.unit}</Table.Cell>
                    <Table.Cell>
                        {props.item.reference}</Table.Cell>

                    <Table.Cell>
                        {props.item.time}</Table.Cell>

                    
                    <Table.Cell>
                        {props.item.th}</Table.Cell>

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