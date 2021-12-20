import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskList: this.props.taskList,
    };
  }
  componentDidMount() {
    let taskList = this.props.taskList;
    let total = 0,
      completed = 0,
      remaining = 0;
    taskList.forEach((task) => {
      task.isChecked ? (completed += 1) : (remaining += 1);
      total = total + 1;
    });
    this.setState({
      total: total,
      completed: completed,
      remaining: remaining,
    });
  }

  shouldComponentUpdate() {
    // console.log("should component update");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.taskList);
    // console.log(this.props.taskList);
  }

  componentWillUnmount() {
    // console.log("component Will Unmount");
  }

  render() {
    const taskList = this.state.taskList;
    const completedTasks = taskList.filter((task) => task.isChecked);
    return (
      <div className="header">
        <h4>Summary</h4>
        <div className="count">
          <span>Total: {taskList.length}</span>
          <span>Completed: {completedTasks.length}</span>
          <span>Remaining: {taskList.length - completedTasks.length}</span>
        </div>
      </div>
    );
  }
}

export default Header;
