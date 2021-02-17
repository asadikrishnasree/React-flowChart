// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {


  constructor() {
    super()
    const data = {
      "projetcName": "Build-Car",
      "startDate": "Thu Nov 05 2020 11:20:12 GMT+0530 (India Standard Time)",
      "endDate": "Thu Nov 15 2020 11:20:12 GMT+0530 (India Standard Time)",
      "root": {
        "task1": { "name": "BuildFrame", "prevTask": "", "nextTask": "task2" },
        "task2": { "name": "BuildBody", "prevTask": "task1", "nextTask": "task4" },
        "task3": { "name": "TestCar", "prevTask": "task4", "nextTask": "" },
        "task4": { "name": "FitTyre", "prevTask": "task2", "nextTask": "task3" }
      }

    }
    this.state = {
      data,
      newData: []
    }
  }
  componentDidMount() {
    let roots = this.state.data.root;
    let keys = Object.keys(roots);
    let selectedItem = null;
    let newList = [];
    keys.forEach((key, i) => {
      if (roots[key].prevTask == "") {
        selectedItem = { ...roots[key], taskName: key }
        newList.push({ ...selectedItem });
        return 0;
      }
    })
    while (selectedItem.nextTask) {
      selectedItem = { ...roots[selectedItem.nextTask], taskName: selectedItem.nextTask };
      newList.push({ ...selectedItem });
    }
    this.setState({ newData: newList })
  }

  render() {
    return (
      <div className="main">{
        this.state.newData.map((task, i) => (
          <li>
            <hr></hr>
            <div key={i} className="col-md-1 offset-md-2 color_txt">
              <div >
                <h6 className="m_title"> {task.taskName}</h6>
                <h6> {task.name}</h6>
              </div>
            </div>
            <p className="vertical_line"></p>
          </li>
        ))
      }
      </div>
    )
  }
}
export default App;
