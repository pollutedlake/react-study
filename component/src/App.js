import React, { Component } from 'react';
import MyComponent from './MyComponent'; // MyComponent 파일을 불러옵니다.

class App extends Component {
  render() {
    return (
      <MyComponent name = "react" age = {4}/>
    );
  }
}

export default App;
