import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"

const App = () => {
    const data = [{ id: null, name: "", age: "", breed: "", owner:"", species:"", color:"", idnumber:""}];
    const initialFormState = { id: null, name: "", age: "", breed: "", owner:"", species:"", color:"", idnumber:""};

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
            age: data.age,
            breed: data.breed,
            owner: data.owner,
            species: data.species,
            idnumber: data.idnumber,
            color: data.color,

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

export default App;

