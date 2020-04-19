import React, { useState, useEffect, Fragment } from "react";
import { Table, Button, Modal, Icon } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';


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
                        name="admissionDate"
                        value={data.admissionDate}
                        onChange={handleInputChange}
                        placeholder={t('Data przyjęcia.12')} />
                </div>
                    <div className="ui input">
                        <input
                            type="text"
                            name="dischargeDate"
                            value={data.dischargeDate}
                            onChange={handleInputChange}
                            placeholder={t('Data wypisu.13')}
                        /></div>
                    <div className="ui input">
                    </div>
                    <div className="ui input">
                        <input
                            type="text"
                            name="doctor"
                            value={data.doctor}
                            onChange={handleInputChange}
                            placeholder={t('Lekarz.14')}
                        /></div>
                    <div className="ui input">
                        <input
                            type="text"
                            name="patientsCondition"
                            value={data.patientsCondition}
                            onChange={handleInputChange}
                            placeholder={t('Informacja o stanie pacjenta.15')}
                        /></div><div className="ui input">
                        <input
                            type="text"
                            name="diagnosis"
                            value={data.diagnosis}
                            onChange={handleInputChange}
                            placeholder={t('Diagnoza.16')}
                        /><div className="ui input"></div>
                        <input
                            type="text"
                            name="recommendations"
                            value={data.recommendations}
                            onChange={handleInputChange}
                            placeholder={t('Zalecenia.17')}
                        /></div>
                </Table.Cell>
                <Table.Cell>

                    <Button basic color='green'
                        onClick={() => props.updatedData(data)}
                    >
                        {t('Zapisz.33')}          </Button>
                    <Button basic color='red'
                        onClick={() => props.setEditing(false)}
                    >
                        {t('Zrezygnuj.44')}
                    </Button>
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
