import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Table() {
  const tableHook = useSelector((state) => state.formReducer);
  const dispatch = useDispatch();
  return (
    <div className="card-body">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableHook.list.map((user, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-light" : "bg-secondary"}
            >
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <button
                  onClick={() => dispatch({ type: "EDIT", payload: user.id })}
                  className="btn btn-info mr-2"
                >
                  EDIT
                </button>
                <button
                  onClick={() => dispatch({ type: "DEL", payload: user.id })}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
