import { useContext } from "react";
import UserDetailsContext from "../provider/user-details.provider";

export default function Overview() {
  const { userDetails, title } = useContext(UserDetailsContext);
  return (
    <>
      <div>
        This is Overview component::: {userDetails.name}, {userDetails.age},{" "}
        {title}
      </div>
    </>
  );
}
