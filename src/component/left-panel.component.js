import { useContext, useState } from "react";
import UserDetailsContext from "../provider/user-details.provider";

export default function LeftPanel() {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const [userName, setUserName] = useState("");

  const updateUserDetails = () => {
    setUserDetails({
      ...userDetails,
      name: userName,
    });
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
    </>
  );
}
