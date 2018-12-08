export const fetchCourses = () => (dispatch, getState) => {
    fetch("http://localhost:4000/api/list/course")
      .then(res => res.json())
      .then(courses =>
        dispatch({
          type: "FETCH_COURSES",
          payload: courses
        })
      );
  };
  
  export const deleteCourse = (id) => (dispatch, getState) => {
      // console.log(id)
    fetch(`http://localhost:4000/api/delete/course/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(course =>{
        dispatch({
          type: "DELETE_COURSE",
          payload: true
        })
       }
      );
  };
  
  export const createCourse = (data) => (dispatch, getState) => {
      console.log(data)
    fetch(`http://localhost:4000/api/create/course`, {
      method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(course =>{
        dispatch({
          type: "CREATE_COURSE",
          payload: course
        })
       }
      );
  };
  
  export const updateCourse = (data) => (dispatch, getState) => {
    fetch(`http://localhost:4000/api/update/course`, {
      method: "PUT",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(course =>{
        dispatch({
          type: "UPDATE_COURSE",
          payload: true
        })
       }
      );
  };
  