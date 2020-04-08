import React, { useState } from "react";
import Table from "./Table";
import firebase from "../Firebase/firebase"
import AddData from "./AddData"

const App = () => {
  const data = [{ id: null, surname: "", firstname: "",vetClinic: "" }];
  const initialFormState = { id: null, surname: "", firstname: "",vetClinic: "" };

  const [datas, setDatas] = useState(data);
  const [currentData, setCurrentData] = useState(initialFormState);
  const [editing, setEditing] = useState(false);



  const deleteData = id => {
    setEditing(false);
    firebase
      .firestore()
      .collection("doctors")
      .doc(id)
      .delete();
  };

  const updatedData = updatedRow => {
    setEditing(false);
    firebase
      .firestore()
      .collection("doctors")
      .doc(updatedRow.id)
      .set(updatedRow);
  };

  const editRow = data => {
    setEditing(true);
    setCurrentData({
      id: data.id,
      firstname: data.firstname,
      surname: data.surname,
      firstname: data.firstname,
      vetClinic: data.vetClinic,


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
