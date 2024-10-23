import { useContext, useState } from "react";
import UserDetailsContext from "../../provider/user-details.provider";
import { useNavigate } from "react-router-dom"; // useNavigate in React Router v6
import "./left-panel.component.css";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/actions/counter-actions";

export default function LeftPanel() {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const [userName, setUserName] = useState("");
  const [counter, setCounter] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateUserDetails = () => {
    setUserDetails({
      ...userDetails,
      name: userName,
    });
  };

  const loadLoginPage = () => {
    navigate("/login");
  };

  const incrementCounter = () => {
    dispatch(increment(counter));
  };

  return (
    <>
      <div>This is left Panel</div>
      <input
        name='userName'
        onChange={(evt) => setUserName(evt.target.value)}
        placeholder='Provider User Name'
      />
      <button onClick={() => updateUserDetails()}>Change User Name</button>

      <button className='login-button' onClick={loadLoginPage}>
        Redirect to Login
      </button>

      <div>
        <input
          name='counter'
          value={counter}
          onChange={(evt) => setCounter(evt.target.value)}
        />
        <button onClick={() => incrementCounter()}>Increment Counter</button>

        <button onClick={() => dispatch(decrement(counter))}>
          Decrement Counter
        </button>
      </div>
    </>
  );
}
