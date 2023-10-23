import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
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
