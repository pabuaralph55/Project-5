import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionData from './components/SectionData.js';

function App() {

  const SectionItem = SectionData.map((data) => (
    <Section
      key = {data.id}
      id = {data.id}
      image = {data.image}
      title = {data.title}
      desc = {data.desc}
      button1 = {data.button1}
      button2 = {data.button2}
    />
  ))
  
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      {SectionItem}
    </div>
  );
}

export default App;
