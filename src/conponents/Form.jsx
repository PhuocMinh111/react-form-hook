import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import checkValid from "../validation/validation";
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
  const [isEdit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const hookState = useSelector((state) => state.formReducer);

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (hookState.selected) setEdit(true);
    setErr(checkValid(state, hookState.list));
    setSubmit(true);
    console.log(err);

    // setErr({});
    // console.log(err);
  }

  useEffect(() => {
    if (hookState.selected) {
      setState({ ...hookState.selected });
      return;
    }
    if (Object.keys(err).length && isEdit) {
      dispatch({ type: "CONFIRM_EDIT", payload: state });
      setErr({});
      setEdit(false);
      return;
    }
    if (Object.keys(err).length < 1 && isSubmit) {
      dispatch({ type: "ADD", payload: state });
      setState({
        userName: "",
        fullName: "",
        passWord: "",
        phoneNumber: "",
        email: "",
        type: ""
      });
      setErr({});
      setSubmit(false);
    }
  }, [err, hookState.selected, isEdit]);
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
              <button
                // disabled={hookState.selected ? true : false}
                type="submit"
                className="btn btn-warning mr-2"
              >
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
