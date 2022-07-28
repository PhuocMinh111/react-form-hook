import validator from "validator";

export default function checkValid(state, list) {
  const error = {};
  const { userName, fullName, passWord, phoneNumber, email, type } = state;
  if (!userName) {
    error.userName = `user name is required`;
  } else if (list) {
    const index = list.findIndex((item) => item.userName === userName);
    if (index !== -1) error.userName = `user name already existed`;
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

  // setErr({ ...error });
  return error;
}
