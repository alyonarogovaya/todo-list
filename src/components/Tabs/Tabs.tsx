import { NavLink } from "react-router-dom";

import styles from "./Tabs.module.css";

const Tabs: React.FC = () => {
  return (
    <div className={styles.tabs}>
      <NavLink to="/">All</NavLink>
      <NavLink to="/deleted">Deleted</NavLink>
      <NavLink to="/completed">Completed</NavLink>
    </div>
  );
};

export default Tabs;
