
import React, { useState } from "react";
import UserTable from "./doctors"
//import EditUserForm from "./edit";



export default function App() {
  

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentuser] = useState(initialFormstate);

 
//////
  const deleteData= id => {
    setUsers(users.filter(user => user.id !== id));
  };
//////////


  const editData = user => {
    setEditing(true);
    setCurrentuser({ id: user.id, name: user.name, username: user.username });
  };
  const updateData = (id, updateData) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateData : user)));
  };
  return (
    <div className="container">
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateData={updateData}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editData={editData} deleteData={deleteData} />
        </div>
      </div>
    </div>
  );
}

