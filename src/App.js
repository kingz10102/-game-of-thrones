import React, { Component } from 'react';


class App extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
    items: [],
    isLoaded: false,
  }
  
}
 
componentDidMount() {
   
  fetch('http://anapioficeandfire.com/api/characters/16')
    .then(res => res.json())
    .then(json => {
      this.setState({
            isLoaded: true,
            items: json,
      })
    });
}  

render(){
    return (
      <div className="App">
      
      </div>
    );
  
  }

}

export default App;
