import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"


const History = () => {
    const data = [{}];
    const initialFormState = {};

    const [datas, setDatas] = useState(data);
    const [currentData, setCurrentData] = useState(initialFormState);
    const [editing, setEditing] = useState(false);


    const deleteData = id => {
        setEditing(false);
        firebase
            .firestore()
            .collection("results")
            .doc(id)
            .delete();
    };


    const updatedData = updatedRow => {
        setEditing(false);
        firebase
            .firestore()
            .collection("results")
            .doc(updatedRow.id)
            .set(updatedRow);
    };

    const editRow = data => {
        setEditing(true);
        setCurrentData({
            id: data.id,
            created: data.created,
            date: data.date,
            name: data.name,
            reference: data.reference,
            result: data.result,
            type: data.type,
            unit: data.unit
        });
    };

    return (<div>
        <div>
            <Table
                datas={datas}
                editRow={editRow}
                deleteData={deleteData}
                editing={editing}
                setEditing={setEditing}
                currentData={currentData}
                updatedData={updatedData}
            />
        </div>
        <div className="doctors">
            <AddData /></div></div>
    );
};

export default History;
