import styles from "./layout.module.sass";
import Navbar from "../navbar/navbar";
import Infobar from "../infobar/infobar";
import Content from "../content/content";
import Header from "../content/header/header";
import {FC} from "react";

const Layout:FC = () => {
  return (
    <div className={styles.section}>
      <Header />
      <div className={styles.container}>
        <Navbar />
        <Content />
        <Infobar />
      </div>
    </div>
  );
};

export default Layout;
