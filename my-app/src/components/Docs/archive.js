

import React from "react";
import { Table } from 'semantic-ui-react'

import Image from '../Firebase/ImageUpload'



const TableFixed = () => {


    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Data</Table.HeaderCell>
                        <Table.HeaderCell>Rodzaj dokumentu</Table.HeaderCell>
                        <Table.HeaderCell>Wczytaj dokument</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                     <Table.Row>
                        <Table.Cell>
                        </Table.Cell> <Table.Cell>
                        </Table.Cell> <Table.Cell><Image/>
                        </Table.Cell>

                    </Table.Row>
                </Table.Body>
            </Table>
    
        </div>
    )
};

export default TableFixed;

