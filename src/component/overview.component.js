import { useContext } from "react";
import UserDetailsContext from "../provider/user-details.provider";
import { useSelector } from "react-redux";

export default function Overview() {
  const { userDetails, title } = useContext(UserDetailsContext);
  const count = useSelector((state) => state.count);
  const userName = useSelector((state) => state.userDetails);
  return (
    <>
      <div>
        This is Overview component:::
        {title}
      </div>

      <div>
        <ul>
          {userDetails?.map((item) => (
            <li>
              {item.first_name} {item.last_name} - {item.email}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Count Value: {count}</h1>
        User name from Store:{" "}
        <b>
          {userName.firstName} {userName.lastName}
        </b>
      </div>
    </>
  );
}
