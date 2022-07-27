import React from "react";

function Table() {
  return (
    <div className="card-body">
      <table class="table">
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
          <tr className="bg-light">
            <td>1</td>
            <td>man.nguyen</td>
            <td>Man Ng</td>
            <td>man.nguyen@gmail.com</td>
            <td>085512123123.</td>
            <td>Client</td>
            <td>
              <button className="btn btn-info mr-2">EDIT</button>
              <button className="btn btn-danger">DELETE</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>khai.tran</td>
            <td>Khai Tran</td>
            <td>khai.tran@gmail.com</td>
            <td>085512456456</td>
            <td>Admin</td>
            <td>
              <button className="btn btn-info mr-2">EDIT</button>
              <button className="btn btn-danger">DELETE</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
