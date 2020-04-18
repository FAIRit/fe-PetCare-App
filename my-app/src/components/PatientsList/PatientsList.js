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
      age: data.age,
      breed: data.breed,
      color: data.color,
      created: data.created,
      idnumber: data.idnumber,
      name: data.name,
      owner: data.owner,
      species: data.species,
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
      <AddData/></div></div>
  );
};

export default PatientsList;

