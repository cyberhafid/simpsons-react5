import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  GenerateEmployee  from  './GenerateEmployee';
import  DisplayEmployee  from  './DisplayEmployee';


const  sampleEmployee = {
  gender:  'male',
  name: {
      title:  'mr',
      first:  'mathys',
      last:  'aubert'
  },
  location: {
      street:  '9467 rue gasparin',
      city:  'perpignan',
      postcode:  '90208'
  },
  email:  'mathys.aubert@example.com',
  picture: {
      medium:  'https://randomuser.me/api/portraits/med/men/66.jpg'
  }
};

class App extends Component {
  render() {

    return (
      
      <div className="App">

<GenerateEmployee  />
<DisplayEmployee  employee={sampleEmployee}  />
    
      </div>
    );
  }
}

export default App;
