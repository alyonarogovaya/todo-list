import { NavLink } from "react-router-dom";

import styles from "./Tabs.module.css";

const Tabs: React.FC = () => {
  return (
    <div className={styles.tabs}>
      <NavLink to="/" className={styles.tab}>
        All
      </NavLink>
      <NavLink to="/deleted" className={styles.tab}>
        Deleted
      </NavLink>
      <NavLink to="/completed" className={styles.tab}>
        Completed
      </NavLink>
    </div>
  );
};

export default Tabs;
