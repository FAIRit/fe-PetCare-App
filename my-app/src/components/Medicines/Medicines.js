import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"

const App = () => {
    const data = [{ id: null, admissionDate: "", type: "", vetClinic: "" }];
    const initialFormState = { id: null, admissionDate: "", type: "", vetClinic: "" };

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

    const updatedData = updatedData => {
        setEditing(false);
        firebase
            .firestore()
            .collection("medicines")
            .doc(updatedData.id)
            .set(updatedData);
    };

    const editRow = data => {
        setEditing(true);
        setCurrentData({
          id: data.id,
          name: data.name,
          type: data.type,
          dosage: data.dosage,
          other: data.other,
          doctor: data.doctor,
          diagnosis: data.diagnosis,
          recommendations: data.recommendations,
          




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







