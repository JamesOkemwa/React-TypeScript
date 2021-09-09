import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [ people, setPeople ] = useState<IState["people"]>([
    {
      name: "James",
      age: 25,
      url: "https://cdn.pixabay.com/photo/2021/03/03/14/55/rhino-6065480__480.jpg",
      note: "Full Stack Developer"
    }
  ])

  return (
    <div className="App">
      <h1>Project Team Members</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
