import React, { useState } from "react";
import Table from "./Table";

function Form() {
  const [state, setState] = useState({
    userName: "",
    fullName: "",
    passWord: "",
    phoneNumber: "",
    email: "",
    type: ""
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  return (
    <div className="w-75 mx-auto mt-5">
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label>Username</label>
                  <input
                    name="userName"
                    value={state.userName}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    name="fullName"
                    onChange={handleChange}
                    value={state.fullName}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="passWord"
                    onChange={handleChange}
                    value={state.passWord}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={state.phoneNumber}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label>Type</label>
                  <select
                    name="type"
                    value={state.type}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option>Client</option>
                    <option>Admin</option>
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted">
          <button className="btn btn-warning mr-2">SAVE</button>
          <button className="btn btn-outline-dark">RESET</button>
        </div>
      </div>
      <div className="card p-0 mt-3">
        <div className="card-header font-weight-bold">USER MANAGEMENT</div>
        <div className="row mt-4 px-3 ">
          <div className="col-4">
            <div className="form-group mb-0">
              <input
                type="text"
                placeholder="Search by full name..."
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3 ml-auto">
            <div className="form-group mb-0">
              <select className="form-control">
                <option>All</option>
                <option>Client</option>
                <option>Admin</option>
              </select>
            </div>
          </div>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Form;
