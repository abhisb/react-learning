import { Link } from "react-router-dom";
import styles from "./header.component.module.css";

function HeaderComponent({ title }) {
  const name = "Alex";
  return (
    <>
      <div className={styles.headerContainer}>
        <header>
          <div>{title}</div>
        </header>
        <div style={{ height: "50px" }}>Hi {name}!</div>
      </div>
      <ul>
        {/* <li>
          <Link to='/'>Home</Link>
        </li> */}
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </>
  );
}

export default HeaderComponent;
