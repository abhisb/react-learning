import { useContext } from "react";
import UserDetailsContext from "../provider/user-details.provider";

export default function Overview() {
  const { userDetails, title } = useContext(UserDetailsContext);
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
    </>
  );
}
