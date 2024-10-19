import { useState } from "react";
import UserDetailsContext from "../provider/user-details.provider";
import DashboardPageComponent from "./dashboard.component";
import LoginPageComponent from "./login.component";
import { Route, Routes, useSearchParams } from "react-router-dom";

export default function PageComponent() {
  // const params = new URLSearchParams(window.location.search);
  // const paramsObj = Object.fromEntries(params.entries());
  const [searchParams] = useSearchParams();
  const [userDetails, setUserDetails] = useState([
    {
      email: "alexdoe@test.com",
      first_name: "Alex",
      last_name: "Doe",
    },
  ]);
  const [employeeAllocation, setEmployeeAllocation] = useState();
  const name = searchParams.get("name");
  console.log("Query params name::: ", name);

  return (
    <>
      <UserDetailsContext.Provider
        value={{
          userDetails,
          title: "Context Provider testing data ^^^^^",
          setUserDetails,
          employeeAllocation,
          setEmployeeAllocation,
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
