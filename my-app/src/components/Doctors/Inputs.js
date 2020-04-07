import React, { useState, useEffect, Fragment } from "react";
import { Table,Button } from 'semantic-ui-react'
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
            {props.item.firstname}</Table.Cell>

          <Table.Cell>
            {props.item.surname}</Table.Cell>

          <Table.Cell>
            {props.item.vetClinic}</Table.Cell>

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
