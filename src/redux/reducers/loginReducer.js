const initialState = {
  loading: false,
  loggedIn: false,
  token: "",
  errorMsg:""
};

const fetchLogin = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TOKEN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TOKEN_SUCCESS":
      return {
        ...state,
        token: action.payload,
        loggedIn: true,
        loading: false,
      };
    case "FETCH_TOKEN_FAILURE":
      return {
        ...state,
        token: "",
        loggedIn: false,
        loading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default fetchLogin;
