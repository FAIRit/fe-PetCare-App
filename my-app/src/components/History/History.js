import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"

const History = () => {
    const data = [{ id: null, admissionDate: "", type: "", vetClinic: "" }];
    const initialFormState = { id: null, admissionDate: "", type: "", vetClinic: "" };

    const [datas, setDatas] = useState(data);
    const [currentData, setCurrentData] = useState(initialFormState);
    const [editing, setEditing] = useState(false);



    const deleteData = id => {
        setEditing(false);
        firebase
            .firestore()
            .collection("history")
            .doc(id)
            .delete();
    };

    const updatedData = updatedData => {
        setEditing(false);
        firebase
            .firestore()
            .collection("history")
            .doc(updatedData.id)
            .set(updatedData);
    };

    const editRow = data => {
        setEditing(true);
        setCurrentData({
            id: data.id,
            admissionDate: data.admissionDate,
            dischargeDate: data.dischargeDate,
            vet: data.vet,
            doctor: data.doctor,
            patientsCondition: data.patientsCondition,
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

export default History;
