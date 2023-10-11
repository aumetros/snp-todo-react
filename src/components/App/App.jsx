import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
