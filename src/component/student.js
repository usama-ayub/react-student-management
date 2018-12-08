import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchStudents,
  deleteStudent,
  createStudent,
  updateStudent
} from "../store/action/studentActions";

class Student extends Component {
  state = {
    name: "",
    enrol_no: "",
    id:""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    window.$("#exampleModal").modal("hide");
    this.props.createStudent(this.state);
  }

  clickEdit = e=>{
    this.setState({
      name:e.name,
      enrol_no:e.enrol_no,
      id:e._id
    })
  }
  
  editStudent = e => {
    this.props.updateStudent(this.state);
    // window.$("#exampleModa1").modal("hide");
  }

  componentDidMount() {
    this.props.fetchStudents();
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.student).length) {
      this.props.students.data.unshift(nextProps.student.data);
      console.log("new props");
    }
    if (nextProps.DStudent) {
      console.log("new props DStudent");
    }
    if (nextProps.UStudent) {
      console.log("new props UStudent");
    } else {
      console.log("old props");
    }
  }

  render() {
    // console.log(window.$)
    return (
      <div>
        <div style={{ width: "90%", margin: "auto" }}>
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Enrollment Number</th>
                  <th scope="col">Update</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>{this.isStudentArray()}</tbody>
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
              Create Student
            </button>
          </div>
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
                  Create Student
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
                    <label className="col-form-label">Enrollment Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="enrol_no"
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
                <form onSubmit={this.editStudent}>
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
                    <label className="col-form-label">Enrollment Number:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="enrol_no"
                      value={this.state.enrol_no}
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
      </div>
    );
  }

  isStudentArray() {
    return (
      this.props.students.data &&
      this.props.students.data.map((student, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{student.name}</td>
          <td>{student.enrol_no}</td>
          <td>
            <i
              className="fas fa-edit"
              data-toggle="modal"
              data-target="#exampleModa1"
              onClick={() => this.clickEdit(student)}
            />
          </td>
          <td>
            <i className="fas fa-trash" onClick={() => this.props.deleteStudent(student._id)}/>
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
    students: state.students.students,
    student: state.students.student,
    DStudent: state.students.DStudent,
    UStudent: state.students.UStudent
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
    deleteStudent: id => dispatch(deleteStudent(id)),
    createStudent: data => dispatch(createStudent(data)),
    updateStudent: data => dispatch(updateStudent(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
