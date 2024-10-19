import { useContext, useState } from "react";
import UserDetailsContext from "../../provider/user-details.provider";
import { useNavigate } from "react-router-dom"; // useNavigate in React Router v6
import "./left-panel.component.css";

export default function LeftPanel() {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const updateUserDetails = () => {
    setUserDetails({
      ...userDetails,
      name: userName,
    });
  };

  const loadLoginPage = () => {
    navigate("/login");
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
    </>
  );
}
