const initialState = {
  loading: false,
  signedIn: false,
  token: "",
  errorMsg:""
};

const fetchSignup = (state = initialState, action) => {
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
        signedIn: true,
        loading: false,
      };
    case "FETCH_TOKEN_FAILURE":
      return {
        ...state,
        token: "",
        signedIn: false,
        loading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default fetchSignup;
