export const fetchStudents = () => (dispatch, getState) => {
  fetch("http://localhost:4000/api/list/student")
    .then(res => res.json())
    .then(students =>
      dispatch({
        type: "FETCH_STUDENTS",
        payload: students
      })
    );
};

export const deleteStudent = (id) => (dispatch, getState) => {
    // console.log(id)
  fetch(`http://localhost:4000/api/delete/student/${id}`, {
    method: "DELETE"
  })
    .then(res => res.json())
    .then(student =>{
      dispatch({
        type: "DELETE_STUDENT",
        payload: true
      })
     }
    );
};

export const createStudent = (data) => (dispatch, getState) => {
    console.log(data)
  fetch(`http://localhost:4000/api/create/student`, {
    method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(student =>{
      dispatch({
        type: "CREATE_STUDENT",
        payload: student
      })
     }
    );
};

export const updateStudent = (data) => (dispatch, getState) => {
  fetch(`http://localhost:4000/api/update/student`, {
    method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(student =>{
      dispatch({
        type: "UPDATE_STUDENT",
        payload: true
      })
     }
    );
};
