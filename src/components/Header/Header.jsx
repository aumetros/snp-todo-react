import styles from "./Header.module.scss"

function Header() {
  return (
    <header>
      <h1 className={styles.title}>Список дел</h1>
    </header>
  );
}

export default Header;
