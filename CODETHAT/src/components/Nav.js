import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Code_that Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link to="/courses">카탈로그</Link>
          </li>
          <li>
            <Link to="/questions">커뮤니티</Link>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
