import { axiosWithAuth } from "../../utils";
import { tokenName } from "../../data";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = (credentials) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  axiosWithAuth()
    .post("/api/login", credentials)
    .then((res) => {
      localStorage.setItem(tokenName, res.data.payload);
      dispatch({ type: LOGIN_SUCCESS });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

export const clearStorage = () => (dispatch) => {
  localStorage.removeItem(tokenName);
};
