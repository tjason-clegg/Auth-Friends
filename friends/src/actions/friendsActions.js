import { v4 as uuid } from "uuid";
import { axiosWithAuth } from "../../utils";
import { tokenName } from "../../data";

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAILURE = "FETCH_FRIENDS_FAILURE";
export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCH_FRIENDS_START });
  axiosWithAuth()
    .get("/api/friends")
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FRIENDS_FAILURE });
    });
};

export const HANDLE_INPUT = "HANDLE_INPUT";
export const handleInput = (e) => (dispatch) => {
  dispatch({ type: HANDLE_INPUT, payload: e.target });
};

export const POST_FRIEND_START = "POST_FRIEND_START";
export const POST_FRIEND_SUCCESS = "POST_FRIEND_SUCCESS";
export const POST_FRIEND_FAILURE = "POST_FRIEND_FAILURE";
export const postFriend = (newFriend) => (dispatch) => {
  dispatch({ type: POST_FRIEND_START });
  axiosWithAuth()
    .post("/api/friends", { ...newFriend, id: uuid() })
    .then((res) => {
      dispatch({ type: POST_FRIEND_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: POST_FRIEND_FAILURE });
    });
};
