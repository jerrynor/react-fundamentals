import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const names = ['alice', 'bob', 'carol'];

// Return a new array with names capitalized

const capitalized = names.map(name => name[0].toUpperCase() + name.slice(1));
 
  return (
    <div>
      <p>{capitalized.join(", ")}</p>
    </div>
  );
}

export default App;

