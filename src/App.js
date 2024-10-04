import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./component/header.component";
import Profile from "./component/profile.component";
// import { Header } from "./components/header.component";

function App() {
  const pageTitle = "Learning React App";
  const userDetails = { title: "A", id: 1 };

  return (
    <div className='App'>
      <HeaderComponent title={pageTitle}></HeaderComponent>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Sample application</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Profile {...userDetails} />
        <Profile {...userDetails} />
      </header>
    </div>
  );
}

export default App;
