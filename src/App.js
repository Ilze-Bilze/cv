import React from 'react';
import './App.css';
import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import Bio from './components/Bio';
import Skills from './components/Skills'

class App extends React.Component {
  render() {
    const image = '/images/profile-image.jpg';
    const name = 'Ilze';

    return (
      <div className="App">
        <Header />
        <ProfileImage image={image} name={name} />
        <Bio />
        <Skills />
      </div>
    );
  }
}

export default App;
