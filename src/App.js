import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./component/header.component";
import Profile from "./component/profile.component";
// import { Header } from "./components/header.component";
import MyApp from "./component/Appname.component";
import AddToDO from "./component/addtodo.component";
import "bootstrap/dist/css/bootstrap.min.css"; 
import TodoItem from "./component/todoitem.component";
import TodoItem2 from "./component/todoitem2.component";

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
        <Profile title={userDetails.title} id={userDetails.id} />

        <center className="todo-container">
          <MyApp />
          <AddToDO/>
          <TodoItem/>
          <TodoItem2/>
        </center> 
      </header>
    </div>
  );
}

export default App;
