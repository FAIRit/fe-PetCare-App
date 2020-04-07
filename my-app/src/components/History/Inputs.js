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
                        name="admissionDate"
                        value={data.admissionDate}
                        onChange={handleInputChange}/>
               </div><div class="ui input">
                    <input
                        type="text"
                        name="dischargeDate"
                        value={data.dischargeDate}
                        onChange={handleInputChange}
                    /></div>
            <div class="ui input">                    <input
                        type="text"
                        name="vet"
                        value={data.vet}
                        onChange={handleInputChange}
                    /></div>
                <div class="ui input">
                    <input
                        type="text"
                        name="doctor"
                        value={data.doctor}
                        onChange={handleInputChange}
                    /></div>
              <div class="ui input">
                    <input
                        type="text"
                        name="patientsCondition"
                        value={data.patientsCondition}
                        onChange={handleInputChange}
                    /></div><div class="ui input">
                    <input
                        type="text"
                        name="diagnosis"
                        value={data.diagnosis}
                        onChange={handleInputChange}
                    /><div class="ui input"></div>
                    <input
                        type="text"
                        name="recommendations"
                        value={data.recommendations}
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
                        {props.item.admissionDate}</Table.Cell>

                    <Table.Cell>
                        {props.item.dischargeDate}</Table.Cell>

                    <Table.Cell>
                        {props.item.vet}</Table.Cell>

                    <Table.Cell>
                        {props.item.doctor}</Table.Cell>

                    <Table.Cell>
                        {props.item.patientsCondition}</Table.Cell>

                    <Table.Cell>
                        {props.item.diagnosis}</Table.Cell>
                    <Table.Cell>
                        {props.item.recommendations}</Table.Cell>

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
