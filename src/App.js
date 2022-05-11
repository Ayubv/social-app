import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="fix">
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit done hellow<code>src/App.js</code> and save to reload.
        </p>
       <h1>hellow I am forst react app</h1>
       <h3>my heading {3+8}</h3>
       <h1>heolw I am from sherpure {200*4000}</h1>
       <Hellow></Hellow>
       <Hellow></Hellow>
       <Hellow></Hellow>
       <Hellow></Hellow>

       <Hero name="ayub ali"></Hero>
       <Hero name="razu"></Hero>
       <Hero job="webdesign and delopment"></Hero>
      </header>
<p className="ayubapp">My software is running very smart way</p>

    </div>
    </div>
  );
}

function Hellow(){
  const personStyle={
border:'10px solid green',
padding:'50px',
width:'100%'

  }

  return (
  <div style={personStyle}>
  <p>name:</p>
  <h1>Hellow I am learning react app</h1>
  </div>
  )
}
function Hero(props){
  const heroStyle={
border:'6px solid pink',
padding:'50px',
width:'30%'


  }

  return (
  <div style={heroStyle}>
  <p>name:{props.name}</p>
  <h1>{props.job}</h1>
  </div>
  )
}
export default App;
