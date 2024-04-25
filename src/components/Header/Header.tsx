import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Link to="/" className={styles.logoWrapper}>
          <img className={styles.logo} src="/logo.svg"></img>
          ToDo List
        </Link>
      </div>
    </header>
  );
};

export default Header;
