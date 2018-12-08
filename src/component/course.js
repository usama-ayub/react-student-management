import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchCourses,
  deleteCourse,
  createCourse,
  updateCourse
} from "../store/action/courseActions";

class Course extends Component {
    state = {
        name: "",
        code: "",
        id:""
      };
  componentDidMount() {
    this.props.fetchCourses();
  }
  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.CCourse).length) {
      this.props.GCourses.data.unshift(nextProps.CCourse.data);
      console.log("new props");
    }
    if (nextProps.DCourse) {
        console.log("new props DCourse");
      }
    /* 
    if (nextProps.UStudent) {
      console.log("new props UStudent");
    } */ else {
      console.log("old props");
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.createCourse(this.state);
    window.$("#exampleModal").modal("hide");
  }

  clickEdit = e=>{
    this.setState({
      name:e.name,
      code:e.code,
      id:e._id
    })
  }
  
  editCourse = e => {
    this.props.updateCourse(this.state);
    // window.$("#exampleModa1").modal("hide");
  }

  render() {
    return <div style={{ width: "90%", margin: "auto" }}>
           <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Code Number</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>{this.isCourseArray()}</tbody>
            </table>
          </div>
          <br />
          <hr />
          <div style={{ float: "right" }}>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Create Course
            </button>
          </div>
          <div
          className="modal fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Course
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="col-form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Code:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="code"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       <div
          className="modal fade"
          id="exampleModa1"
          role="dialog"
          aria-labelledby="exampleModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel1">
                  Edit Student
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.editCourse}>
                  <div className="form-group">
                    <label className="col-form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Code Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="code"
                      value={this.state.code}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>;
  }
  isCourseArray() {
    return (
      this.props.GCourses.data &&
      this.props.GCourses.data.map((course, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{course.name}</td>
          <td>{course.code}</td>
          <td>
            <i
              className="fas fa-edit"
              data-toggle="modal"
              data-target="#exampleModa1"
              onClick={() => this.clickEdit(course)}
            />
          </td>
          <td>
            <i className="fas fa-trash" onClick={() => this.props.deleteCourse(course._id)}/>
            {/* <i className="fas fa-trash" /> */}
          </td>
        </tr>
      ))
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    GCourses: state.courses.GCourses,
    CCourse: state.courses.CCourse,
    UCourse: state.courses.UCourse,
    DCourse: state.courses.DCourse
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    deleteCourse: id => dispatch(deleteCourse(id)),
    createCourse: data => dispatch(createCourse(data)),
    updateCourse: data => dispatch(updateCourse(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
