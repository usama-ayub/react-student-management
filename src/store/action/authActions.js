export const login = (cred) => (dispatch, getState) => {
    console.log(cred)
  fetch(`http://localhost:4000/api/login`, {
    method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cred)
  })
    .then(res => res.json())
    .then(data =>{
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: data
      })
     }
    );
};