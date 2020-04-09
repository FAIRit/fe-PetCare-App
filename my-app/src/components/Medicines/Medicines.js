import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"

const Medicines = () => {
    const data = [{ }];
    const initialFormState = { };

    const [datas, setDatas] = useState(data);
    const [currentData, setCurrentData] = useState(initialFormState);
    const [editing, setEditing] = useState(false);



    const deleteData = id => {
        setEditing(false);
        firebase
            .firestore()
            .collection("medicines")
            .doc(id)
            .delete();
    };

    const updatedData = updatedRow => {
        setEditing(false);
        firebase
            .firestore()
            .collection("medicines")
            .doc(updatedRow.id)
            .set(updatedRow);
    };

    const editRow = data => {
        setEditing(true);
        setCurrentData({
            id:data.id,
          name: data.name,
          type: data.type,
          dosage: data.dosage,
          other: data.other,
          doctor: data.doctor,

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

export default Medicines;







