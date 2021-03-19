import React from 'react';
import logo from './logo.svg';
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Week1 from './Week1';


class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      name: '리액트'
    };
  }

  render(){ return (
    <div className="App">
      <div className="container">
          <h1 className="title"></h1>
          <hr className="line"/>
          {/* 컴포넌트를 넣어줍니다. */}
          {/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
          <Week1 name={this.state.name} />
      </div>
    </div>
  );

  }
}

export default App;