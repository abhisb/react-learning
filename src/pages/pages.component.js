import { useState } from "react";
import UserDetailsContext from "../provider/user-details.provider";
import DashboardPageComponent from "./dashboard.component";
import LoginPageComponent from "./login.component";
import { Route, Routes } from "react-router-dom";

export default function PageComponent() {
  const params = new URLSearchParams(window.location.search);
  const paramsObj = Object.fromEntries(params.entries());
  const [userDetails, setUserDetails] = useState({ name: "Alex", age: 30 });

  console.log(paramsObj);

  return (
    <>
      <UserDetailsContext.Provider
        value={{
          userDetails,
          title: "Context Provider testing data ^^^^^",
          setUserDetails,
        }}
      >
        {/* {paramsObj?.name === "dashboard" ? <DashboardPageComponent /> : ""}
        {paramsObj?.name === "login" ? <LoginPageComponent /> : ""} */}

        <Routes>
          <Route path='/dashboard' element={<DashboardPageComponent />} />
          <Route path='/login' element={<LoginPageComponent />} />
        </Routes>
      </UserDetailsContext.Provider>
    </>
  );
}
