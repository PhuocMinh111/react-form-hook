import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
export default function Form() {
  const [state, setState] = useState({
    userName: "",
    fullName: "",
    passWord: "",
    phoneNumber: "",
    email: "",
    type: ""
  });
  const [err, setErr] = useState({});
  const [isSubmit, setSubmit] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    checkValid();
    for (const item in err) {
      if (err[item] !== "") return;
      setSubmit(true);
      // if (value === "" || item) setSubmit(true);
      // setSubmit(true);
    }
  }

  function checkValid() {
    const error = {};
    const { userName, fullName, passWord, phoneNumber, email, type } = state;
    if (!userName) {
      error.userName = `user name is required`;
    }
    if (!fullName) {
      error.fullName = `full  name is required`;
    }

    if (!passWord) {
      error.passWord = `password is required`;
    }

    if (!phoneNumber) {
      error.phoneNumber = `phone number is required`;
    } else if (!validator.isLength(phoneNumber, { min: 6, max: 12 })) {
      error.phoneNumber = `phone number must be 6 - 12 numbers`;
    } else if (!validator.isNumeric(phoneNumber)) {
      error.phoneNumber = `phone number must be number`;
    }

    if (!email) {
      error.email = `email is required`;
    } else if (!validator.isEmail(email)) {
      error.email = `email is not correct`;
    }
    if (!type) {
      error.type = `type is required`;
    }

    console.log(error);
    setErr({ ...error });
  }
  useEffect(() => {
    if (Object.keys(err).length < 1) {
      dispatch({ type: "ADD", payload: state });
      setState({
        userName: "",
        fullName: "",
        passWord: "",
        phoneNumber: "",
        email: "",
        type: ""
      });
    }
  }, [err]);
  return (
    <div className="w-75 mx-auto mt-5">
      <div className="card p-0">
        <div className="card-header bg-warning text-white font-weight-bold">
          REGISTER FORM
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
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
                  {err.userName && (
                    <span className="text-danger">* {err.userName}</span>
                  )}
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
                  {err.fullName && (
                    <span className="text-danger">* {err.fullName}</span>
                  )}
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
                  {err.passWord && (
                    <span className="text-danger">* {err.passWord}</span>
                  )}
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
                  {err.phoneNumber && (
                    <span className="text-danger">* {err.phoneNumber}</span>
                  )}
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
                  {err.email && (
                    <span className="text-danger">* {err.email}</span>
                  )}
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
                  {err.type && (
                    <span className="text-danger">* {err.type}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-warning mr-2">
                SAVE
              </button>
              <button className="btn btn-outline-dark">RESET</button>
            </div>
          </form>
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
