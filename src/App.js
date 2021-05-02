import logo from './logo.svg';
import './App.css';
import dev from './dev.jpg';

function Header(props) {
  return (
    <header>
      <img src="https://dhis2.org/wp-content/uploads/dhis2-logo-rgb-positive.svg" height="100px" alt="DHIS2 Logo"></img>
      <h1>{props.name}'s learning Reactjs to become an expert DHIS2 Developer</h1>
     
    </header>
  )
}
function Main(props){
  return(<section>
    <p>Making the most {props.adjective} apps!</p>
  <img id="devImage" src={dev} alt="The Developer"></img>
  <p style={{display:"flex", justifyContent:"center"}}>
   <ul className="stuffInList" style={{textAlign:"left"}}>
        {props.myApps.map(
          (myApp) => (
            <li key={myApp.id}>{myApp.title}</li>
          )
        )}
      </ul>
      </p>
  </section>)
}
function Footer(props){
  return(<p>New {props.year}.</p>)
}
const myApps = [
  "GIS apps",
  "Education Apps",
  "Communication Apps",
  "OP Apps"
];

const myAppsObjects = myApps.map((app, i) => ({id: i, title:app}));


function App() {
  return (
    <div className="App"> 
    {/* adds styles */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="myDoc">
        <Header name="Gassim"/>
        <Main adjective="amazing" myApps={myAppsObjects} />
        <Footer year={new Date().getFullYear()}/>
      </div>
          </div>
  );
}

export default App;
