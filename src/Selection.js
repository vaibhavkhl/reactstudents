import React, { Component } from 'react';
import StudentList from './StudentList.js'
// class Options extends Component {
//   render () {
//     return ()
//   }
// }

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: MOCKDATA,
      selectedClass: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.updateAttendance = this.updateAttendance.bind(this);
  }

  handleChange(event) {
    //console.log('test', event.target.value)
    this.setState({selectedClass: event.target.value});
  }

  updateAttendance() {
    console.log('yes')
  }

  createStudentList() {
    var index = this.state.selectedClass - 1;
    return this.state.data[index].students;
  }

  render() {
    console.log(this.state)
    var studentList = this.createStudentList();
    var handleChange = this.handleChange;
    var updateAttendance = this.updateAttendance;
    return (
            <div>
              <Selection handleChange={handleChange}/>
              <StudentList studentList={studentList} updateAttendance={updateAttendance}/>
            </div>
          )
  }
}



class Selection extends Component {
  render() {
    return (
      <div>
        <h1>Select input</h1>
        <div>
          <h3>class</h3>
          <select onChange={this.props.handleChange}>
          <option value="1">Class 1</option>
          <option value="2">Class 2</option>
          <option value="3">Class 3</option>
          </select>
        </div>

        <div>
        <h3>Section</h3>
          <select name="select">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
          </select>
        </div>

          <div>
          <h3>Date</h3>
          <select name="select">
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
          <option value="value3">Value 3</option>
          </select>
          </div>

      </div>
    );
  }
}

export default Container;

var MOCKDATA = [
  {
    class: 1,
    section: 1,
    students: [{
      id: 1,
      name: 'Test 1',
      ispresent: false
    },
    {
      id: 2,
      name: 'Test 2',
      ispresent: false
    },
    {
      id: 3,
      name: 'Test 3',
      ispresent: false
    }]
  },

  {class: 2,
    section: 2,
  students: [{
    id: 1,
    name: 'class 2 student',
    ispresent: false,
  },
  {
    id: 2,
    name: 'clas 2 student',
    ispresent: false
  },
  {
    id: 3,
    name: 'class 2 student',
    ispresent: false
  }]},

  {class: 3,
    section: 3,
  students: [{
    id: 1,
    name: 'class 3',
    ispresent: true
  },
  {
    id: 2,
    name: 'class 3',
    ispresent: true
  },
  {
    id: 3,
    name: 'Test 3',
    ispresent: true
  }]}
  ];
