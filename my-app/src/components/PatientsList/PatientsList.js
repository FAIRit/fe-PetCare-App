import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"

const PatientsList = () => {
    const data = [{}];
    const initialFormState = {};

    const [datas, setDatas] = useState(data);
    const [currentData, setCurrentData] = useState(initialFormState);
    const [editing, setEditing] = useState(false);



    const deleteData = id => {
        setEditing(false);
        firebase
            .firestore()
            .collection("patients")
            .doc(id)
            .delete();
    };

    const updatedData = updatedRow => {
        setEditing(false);
        firebase
            .firestore()
            .collection("patients")
            .doc(updatedRow.id)
            .set(updatedRow);
    };

    const editRow = data => {
        setEditing(true);
        setCurrentData({
            id: data.id,
            name: data.name,
            species: data.species,
            breed: data.breed,
            age: data.age,
            color: data.color,
            owner: data.owner,
            idnumber: data.idnumber


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

export default PatientsList;

