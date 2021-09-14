import React from 'react';
import './App.css';
import image from './image.jpg'

class App extends React.Component {
    state = {
      Person : { 
        fullName: "Fatma",
        bio : "Amir wife",
        imgSrc : image,
        profession: "Futur engineer"
      },
      show: false,
      time: 0
    }
    componentDidMount(){
      setInterval(() => {
        this.setState({...this.state, time:this.state.time+1})
      }, 1000);
    }
    render(){
      return (
        <div>
          { this.state.show &&
            <div>
            <h4>{this.state.Person.fullName}</h4>
            <p>{this.state.Person.bio}</p>
            <img height="200" src={this.state.Person.imgSrc}></img>
            <h5>{this.state.Person.profession}</h5>
            </div>
          }
          <button onClick={e => this.setState({ ...this.state, show : !this.state.show })}>Show/hide</button>
          <br></br>
          <input type="text" value ={this.state.time + " seconds"}/>
        </div>
      )
    }
}
    

export default App;
