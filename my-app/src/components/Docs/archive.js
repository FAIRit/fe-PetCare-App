import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"
import { faTable } from "@fortawesome/free-solid-svg-icons";


const Archive = () => {

  const data = [{ id: null, surname: "", firstname: "" }];
  const initialFormState = { id: null, surname: "", firstname: "" };

  const [datas, setDatas] = useState(data);
  const [currentData, setCurrentData] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  
  const deleteData = id => {
    setEditing(false);
    firebase
      .firestore()
      .collection("docs")
      .doc(id)
      .delete();
  };

  const updatedData = updatedRow => {
    setEditing(false);
    firebase
      .firestore()
      .collection("docs")
      .doc(updatedRow.id)
      .set(updatedRow);
  };

  const editRow = data => {
    setEditing(true);
    setCurrentData({
      id: data.id,
      date: data.date,
      type: data.type,
      created:data.created,
      file: data.file


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
export default Archive;