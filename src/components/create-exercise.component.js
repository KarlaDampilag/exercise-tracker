import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onDurationChange = this.onDurationChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    });
  }

  onUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  onDurationChange(e) {
    this.setState({
      duration: e.target.value
    });
  }

  onDateChange(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };

    console.log(exercise);

    window.location = "/";
  }

  render() {
    return (
      <div>
        <h2>Create New Exercise Log</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onUsernameChange}>
            {
              this.state.users.map(user => {
                return <option key={user} value={user}>{user}</option>;
              })
            }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input type="text" required className="form-control" value={this.state.description} onChange={this.onDescriptionChange} />
          </div>
          <div className="form-group">
            <label>Duration (minutes): </label>
            <input type="text" required className="form-control" value={this.state.duration} onChange={this.onDurationChange} />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker selected={this.state.date} onChange={this.onDateChange} />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
