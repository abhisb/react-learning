import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./component/header/header.component";
import Profile from "./component/profile.component";
import PageComponent from "./pages/pages.component";
// import { Header } from "./components/header.component";
import Newbutton from "./component/new.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  const pageTitle = "Learning React App";
  const userDetails = { title: "A", id: 1 };

  return (
    <BrowserRouter>
      <div className='App'>
        {/* <HeaderComponent title={pageTitle}></HeaderComponent>
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
        <Profile title={userDetails.title} id={userDetails.id} />
        <Profile {...userDetails} />
        <Newbutton />
      </header>*/}
        <PageComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
