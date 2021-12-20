import React, { Component } from "react";
import "../../src/App.css";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskVal: "",
      taskList: [
        {
          task: "Feed The Cat",
          isChecked: false,
          isEditable: false,
          id: 1,
        },
        {
          task: "Walk The Dog",
          isChecked: false,
          isEditable: false,
          id: 2,
        },
      ],
      newTaskVal: "",
      total: 0,
      completed: 0,
      count: 0,
    };
  }

  componentDidMount() {
    let taskList = this.state.taskList;
    let total = 0,
      completed = 0;
    taskList.forEach((task) => {
      if (task.isChecked) {
        completed++;
      }
      total++;
    });
    this.setState({ total: total, completed: completed });
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.taskList);
    // console.log(this.state.taskList);
  }

  taskInputHandler = (e) => {
    this.setState({
      taskVal: e.target.value,
    });
  };

  addTaskBtnHandler() {
    let myList = this.state.taskList;
    myList.push({
      task: this.state.taskVal,
      isChecked: false,
      isEditable: false,
      id: new Date().getTime().toString(),
    });
    this.setState({
      taskList: myList,
      taskVal: "",
    });
  }

  // Checkbox handler
  cbHandler(index) {
    let taskList = this.state.taskList;
    taskList[index].isChecked = !taskList[index].isChecked;
    this.setState(taskList);
  }

  deleteBtnHandler(index) {
    let myList = this.state.taskList;
    myList.splice(index, 1);
    this.setState({ taskList: myList });
  }

  editBtnHandler(index) {
    let myList = this.state.taskList;
    myList[index].isEditable = !myList[index].isEditable;
    this.setState({ taskList: myList });
  }

  newTaskInputHandler(e) {
    this.setState({ newTaskVal: e.target.value });
  }

  modifyBtnHandler(index) {
    let myList = this.state.taskList;
    myList.splice(index, 1, {
      task: this.state.newTaskVal,
      isChecked: false,
      isEditable: false,
      id: new Date().getTime().toString(),
    });
    this.setState({ taskList: myList });
  }

  render() {
    let taskList = this.state.taskList;
    const completedTasks = taskList.filter((task) => task.isChecked);
    return (
      <div>
        <h4>ToDo Class-Component</h4>

        <div className="header">
          <h4>Summary</h4>
          <div className="count">
            <span>Total: {taskList.length}</span>
            <span>Completed: {completedTasks.length}</span>
            <span>Remaining: {taskList.length - completedTasks.length}</span>
          </div>
        </div>

        {/* Input section */}
        <div className="task_input">
          <input
            onChange={(e) => this.taskInputHandler(e)}
            value={this.state.taskVal}
          />
          <button
            className="add_task_btn"
            onClick={() => this.addTaskBtnHandler()}
          >
            Add Task
          </button>
        </div>
        {/* displaying tasks */}
        {taskList.map((task, index) =>
          task.isChecked ? (
            <div key={task.id} className="task">
              <input
                type="checkbox"
                onChange={() => this.cbHandler(index)}
                checked={task.isChecked}
              />
              <span className="checked_span">{task.task}</span>
              <button
                onClick={() => this.deleteBtnHandler(index)}
                className="delete_btn checked_delete_btn"
              >
                Delete
              </button>
            </div>
          ) : task.isEditable ? (
            <div key={task.id} className="task">
              <input
                placeholder={task.task}
                onChange={(e) => this.newTaskInputHandler(e)}
              />

              <button
                onClick={() => this.modifyBtnHandler(index)}
                className="modify_btn"
              >
                Modify
              </button>
              <button
                onClick={() => this.deleteBtnHandler(index)}
                className="delete_btn"
              >
                Delete
              </button>
            </div>
          ) : (
            <div key={task.id} className="task">
              <input
                type="checkbox"
                onChange={() => this.cbHandler(index)}
                checked={task.isChecked}
              />
              <span>{task.task}</span>
              <button
                onClick={() => this.editBtnHandler(index)}
                className="edit_btn"
              >
                Edit
              </button>
              <button
                onClick={() => this.deleteBtnHandler(index)}
                className="delete_btn"
              >
                Delete
              </button>
            </div>
          )
        )}
      </div>
    );
  }
}

export default ToDo;
