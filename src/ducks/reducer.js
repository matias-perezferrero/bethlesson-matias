const initialState = {
  id: 0,
  username: "",
  balance: 0,
  img: ""
};

const UPDATE_USER = "UPDATE_USER";
const CLEAR_USER = "CLEAR_USER";

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function clearUser() {
  return {
    type: CLEAR_USER
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_USER:
      console.log(payload);
      const { id, uzername, balance } = payload;
      const img = payload.uzer_img;
      return { ...state, id, username: uzername, balance, img };
    case CLEAR_USER:
      return { ...state, id: 0, username: "", balance: 0, img: "" };
    default:
      return state;
  }
}
