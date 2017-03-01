import React, { Component } from 'react';


class StudentRow extends Component {

  handleClick(event) {
    console.log('yes');
    console.log('test', event.target.value)
    
  }

  render() {
    return (
      <div className="student" onClick={this.handleClick}>
          <div className="separator"></div>
          <div className="name">{this.props.name}</div>
          <div>
            {this.props.ispresent ? (
              <div>present</div>
            ) : (
              <div>not present</div>
            )}
          </div>
      </div>
    )
  }
}

class StudentList extends Component {
  constructor(props) {
      super(props);
      //this.updateAttendance = this.updateAttendance.bind(this);
    }

    render() {
        var studentrows = []
        var updateAttendance = this.updateAttendance;
        this.props.studentList.forEach(function(student) {
          studentrows.push(<StudentRow key={student.id} id={student.id} name={student.name}
            ispresent={student.ispresent} updateAttendance={updateAttendance}/>)
        });

      return (
          <div className="attendance activity-card">
              <h1 className="title" >STudent List</h1>
              {studentrows}
          </div>
      )
    }
}




  export default StudentList;
