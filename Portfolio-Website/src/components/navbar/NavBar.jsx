import React from "react";
import styles from "./NavBar.module.css";

function NavBar(){
    return(
        <nav className={styles.navbar}>
            <a className={styles.tittle} href="index.html">Rodolfo Gil-Pereira</a>
            <ul className={styles.menuItems}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
export default NavBar