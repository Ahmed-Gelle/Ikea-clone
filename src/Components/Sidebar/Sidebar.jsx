import React, { useContext } from "react";
import Modal from "react-modal";
import { MenuContext } from "../../App";
import logo from "../../../src/assets/logo.svg";
import close from "../../../src/assets/close-icon.svg";
import styles from "./Sidebar.module.scss";
import { Link } from "@mui/material";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    width: 'auto',
    height: '100%',

  },
};

function App() {
  let subtitle;

  const { openMenu, setOpenMenu } = useContext(MenuContext);

  function closeModal() {
    setOpenMenu(false);
  }

  return (
    <div>
      <Modal
        isOpen={openMenu}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.logoContainer}>
              <div className={styles.close} onClick={()=>closeModal()}>
                <img src={close} alt="icon"/>
              </div>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styles.closeMobile} onClick={()=>closeModal()}>
                <img src={close} alt="icon" />
              </div>
            </div>
            <ul className={styles.ul}>
              <li>
                <a className={styles.text} href="#">
                  Nytt på IKEA
                </a>
              </li>
              <li>
                <a className={styles.text} href="#">
                  Produkter
                </a>
              </li>
              <li>
                <a className={styles.text} href="#">
                  Rum
                </a>
              </li>
            </ul>
            <ul className={styles.ul2}>
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            <button>Ändra land</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const links = [
  "Följ min order",
  "Kundservice",
  "Boka planeringshjälp",
  "Planeringsverktyg",
  "Inredningsdesigner",
  "IKEA för företag",
  "IKEA Family",
  "IKEA Restaurang & Bistro",
  "Swedish Food Market Click & collect",
  "Cirkulärbutiken",
  "Live shopping",
];

export default App;
