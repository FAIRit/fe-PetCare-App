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
            name="firstname"
            value={data.firstname}
            onChange={handleInputChange}
          /></div>
        </Table.Cell>
        <Table.Cell><div class="ui input">
          <input
            type="text"
            name="surname"
            value={data.surname}
            onChange={handleInputChange}
          /></div>
        </Table.Cell>


        <Table.Cell><div class="ui input">
          <input
            type="text"
            name="vetClinic"
            value={data.vetClinic}
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
            {props.item.firstname}</Table.Cell>

          <Table.Cell>
            {props.item.surname}</Table.Cell>

          <Table.Cell>
            {props.item.vetClinic}</Table.Cell>

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
