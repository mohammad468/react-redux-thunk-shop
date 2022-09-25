const fetchTokenRequest = () => {
  return {
    type: "FETCH_TOKEN_REQUEST",
  };
};

const fetchTokenSuccess = (token) => {
  return {
    type: "FETCH_TOKEN_SUCCESS",
    payload: token,
  };
};

const fetchTokenFailure = (error) => {
  return {
    type: "FETCH_TOKEN_FAILURE",
    payload: error,
  };
};

export const fetchToken = (userData) => {
  return (dispatch) => {
    dispatch(fetchTokenRequest());
    fetch("http://localhost:8000/user/login/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          dispatch(fetchTokenSuccess(res));
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchTokenFailure(errorMessage));
      });
  };
};
